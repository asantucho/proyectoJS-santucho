// search input. Lista creada con los resultados del fetch. Creación de botón para que agregue a favoritos on click.

function myFavSearch (array) {
    const favButton = document.querySelectorAll(".button-fav-search")
    favButton.forEach (button => {
        button.onclick = () => {
            const favId = button.id.slice(7)
            console.log(favId)
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

let favoritesListSearch = getFromLocalStorage("favorites")
favorites = favoritesListMovies && favoritesListSeries  && favoritesListSearch|| []


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

const searchTitle = document.querySelector(".search-title")
const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-control")

searchForm.onsubmit = (event) =>{
    event.preventDefault()
    searchSection.style.display="block";
    searchTitle.textContent= `Watching results for "${searchInput.value}"`
    searchResultsContainer.innerHTML=""
    favoriteSection.style.display="none";
    contactSection.style.display="none";
    webContainer.style.display= "none";
    localStorage.removeItem = "section"
    saveInLocalStorage("section", "search")
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchInput.value}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
    .then(results => results.json())
    .then(data => {
        console.log(data)
        localStorage.removeItem="search-results"
        localStorage.removeItem="search-input"
        saveInLocalStorage("search-results", data.results)
        saveInLocalStorage("search-input", searchInput.value)
        searchResultCards(data.results)
        myFavSearch(data.results)
    })
    .catch((error) => console.log("ERROR!"))
}

window.onload = () => {
    const storedResults = getFromLocalStorage("search-results")
    const storedInput = getFromLocalStorage("search-input")
    if(storedResults) {
        searchTitle.textContent= `Watching results for "${storedInput}"`
        searchResultCards(storedResults)
    }
}

