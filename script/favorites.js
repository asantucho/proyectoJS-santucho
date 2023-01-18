// Agregar a favoritos

const favContainer = document.querySelector(".favorites-container")
let favorites = []

function myFavs (array) {
    console.log(array)
    const favButton = document.querySelectorAll(".button-fav")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            console.log(favId)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            favorites.push(findFavs)
            console.log(findFavs)
            saveInLocalStorage("favorites", favorites)
            }
        })
    }

const favoritesList = getFromLocalStorage("favorites")
favorites = favoritesList || []

localStorage.removeItem("favorites")

// la ejecución de esta función está en el then del fetch correspondiente, en archivo dom-api.js, como myFavs(data.results) para acceder a la info que trae el fetch