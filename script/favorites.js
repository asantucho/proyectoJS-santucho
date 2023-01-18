// Agregar a favoritos movies

let favorites = []

function myFavsMovies (array) {
    const favButton = document.querySelectorAll(".button-fav-movies")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            favorites.push(findFavs)
            saveInLocalStorage("favorites", favorites)
            favoriteSelection(favorites)
            }
        })
    }

let favoritesListMovies = getFromLocalStorage("favorites")

function myFavsSeries (array) {
    const favButton = document.querySelectorAll(".button-fav-series")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            favorites.push(findFavs)
            saveInLocalStorage("favorites", favorites)
            favoriteSelection(favorites)
            }
        })
    }


let favoritesListSeries = getFromLocalStorage("favorites")
favorites = favoritesListMovies && favoritesListSeries || []


// la ejecución de esta función está en el then del fetch correspondiente, en archivo dom-api.js, como myFavs(data.results) para acceder a la info que trae el fetch

// crear cards para los seleccionados como favoritos y el boton para eliminarlos del array

const favContainer = document.querySelector(".favorites-container")

const favoriteSelection = (array) => {
    array.forEach((favoriteSelected) => {
        const favCard = document.createElement("div")
        favCard.className = "favorite-card"
        favCard.innerHTML = `
            <img src = "https://image.tmdb.org/t/p/original${favoriteSelected.poster_path}" alt = "${favoriteSelected.title || favoriteSelected.name}">
            <button class = "delete-each" id = "button-${favoriteSelected.id}"> Remove from favorites </button>
        `
        favContainer.appendChild(favCard)
    } )
}
favoriteSelection(favorites)


//eliminar todos los favoritos

const deleteAllFavs = document.querySelector(".remove-all-favs")

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
            const idFav = button.id.slice(7)
            const filterFavs = array.filter ((favorite) => {
                return favorite.id !== Number(idFav)
            }) 
        }
    })

}