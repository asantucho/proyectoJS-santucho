// Agregar a favoritos movies

function myFavsMovies (array) {
    const favButton = document.querySelectorAll(".button-fav-movies")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            const doNotRepeat = () => {
                if (!favorites.includes(findFavs)){
                    favorites.push(findFavs)
                    saveInLocalStorage("favorites", favorites)
                }
            }
            doNotRepeat()
            favContainer.innerHTML = ""
            favoriteSelection(favorites)
            }
        })
    }


function myFavsSeries (array) {
    const favButton = document.querySelectorAll(".button-fav-series")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            const doNotRepeat = () => {
                if (!favorites.includes(findFavs)){
                    favorites.push(findFavs)
                    saveInLocalStorage("favorites", favorites)
                }
            }
            doNotRepeat()
            favContainer.innerHTML = ""
            favoriteSelection(favorites)
            }
        })
    }

favorites = favoritesListMovies && favoritesListSeries || []

// la ejecución de esta función está en el then del fetch correspondiente, en archivo dom-api.js, como myFavs(data.results) para acceder a la info que trae el fetch

// crear cards para los seleccionados como favoritos y el boton para eliminarlos del array

const favoriteSelection = (array) => {
    favContainer.innerHTML=""
    array.forEach((favoriteSelected) => {
        const favCard = document.createElement("div")
        favCard.className = "favorite-card"
        favCard.innerHTML = `
            <img src = "https://image.tmdb.org/t/p/original${favoriteSelected.poster_path}" alt = "${favoriteSelected.title || favoriteSelected.name}">
            <button class = "delete-each" id = "button-${favoriteSelected.id}"> Remove from favorites </button>
        `
        favContainer.appendChild(favCard)
        deleteEachFav(favorites)
    } )
}

//funcion ejecutada en las funciones de agregar a favoritos myFavsMovies y myFavsSeries

//eliminar todos los favoritos


deleteAllFavs.onclick = () => {
    localStorage.removeItem("favorites")
    favorites = []
    favContainer.innerHTML = "No favorites have been added to the list yet"
}

// eliminar uno por uno

function deleteEachFav (array) {
    const deleteButton = document.querySelectorAll(".delete-each")
    deleteButton.forEach (button =>{
        button.onclick = () => {
            const favId = button.id.slice(7)
            const filterFavs = array.filter ((favorite, index) => {
                return favorite.id !== Number(favId)
            }) 
            favorites = filterFavs
            saveInLocalStorage("favorites", filterFavs)
            favContainer.innerHTML = ""
            favoriteSelection(favorites)
        }
    })
}


