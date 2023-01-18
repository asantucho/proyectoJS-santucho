// Agregar a favoritos movies

const favContainer = document.querySelector(".favorites-container")
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
            }
        })
    }


let favoritesListSeries = getFromLocalStorage("favorites")
favorites = favoritesListMovies && favoritesListSeries || []


// la ejecución de esta función está en el then del fetch correspondiente, en archivo dom-api.js, como myFavs(data.results) para acceder a la info que trae el fetch

//eliminar todos los favoritos

const deleteAllFavs = document.querySelector(".remove-all-favs")

deleteAllFavs.onclick = () => {
    localStorage.removeItem("favorites")
}