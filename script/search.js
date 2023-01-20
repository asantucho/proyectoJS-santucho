

function myFavSearch (array) {
    const favButton = document.querySelectorAll(".button-fav-search")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            const findFavs = array.find ((favorite) => {
                return favorite.id === Number(favId)
            })
            favorites.push(findFavs)
            saveInLocalStorage("favorites", favorites)
            favContainer.innerHTML = ""
            favoriteSelection(favorites)
            }
        })
    }

const searchResultsContainer = document.querySelector(".search-results")

const searchResultCards = (array) => {
    array.forEach((result) => {
        const resultCard = document.createElement("div")
        resultCard.className = "result-card"
        resultCard.innerHTML = `
        <img src = "https://image.tmdb.org/t/p/original${result.poster_path}" alt = "${result.title || result.name}">
        <button class = "button-fav-search" id = "button-${result.id}">Add to Favorites </button>`
        searchResultsContainer.appendChild(resultCard)
    }) 
}


const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-control")

searchForm.onsubmit = (event) =>{
    event.preventDefault()
    searchSection.style.display="block";
    searchResultsContainer.innerHTML=""
    favoriteSection.style.display="none";
    contactSection.style.display="none";
    webContainer.style.display= "none";
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchInput.value}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
    .then(results => results.json())
    .then(data => {
        console.log(data)
        searchResultCards(data.results)
    })
}

