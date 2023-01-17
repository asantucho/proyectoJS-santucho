// Agregar a favoritos

const favContainer = document.querySelector(".favorites-container")


let favorites = []

function myFavs (array) {
    const favButton = document.querySelectorAll(".button-fav")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const filterFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            favorites.push(filterFavs)
            saveInLocalStorage("favorites", JSON.stringify(favorites))
            }
        })
    }


// la ejecución de esta función está en el then del fetch correspondiente, en archivo dom-api.js, como myFavs (data.results) para acceder a la info que trae el fetch

const favoritesList = JSON.parse(getFromLocalStorage("favorites"))

console.log(favoritesList)

favorites = favoritesList || []

