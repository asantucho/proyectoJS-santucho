// search input. Lista creada con los resultados del fetch. Creación de botón para que agregue a favoritos on click.

function myFavSearch (array) {
    const favButton = document.querySelectorAll(".button-fav-search")
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

favorites = favoritesListMovies && favoritesListSeries  && favoritesListSearch|| []


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

searchForm.onsubmit = (event) =>{
    event.preventDefault()
    searchSection.style.display="block";
    searchTitle.textContent= `Watching results for "${searchInput.value}"`
    searchResultsContainer.innerHTML=""
    favoriteSection.style.display="none";
    contactSection.style.display="none";
    webContainer.style.display= "none";
    removeFromLocalStorage("section")
    saveInLocalStorage("section", "search")
    fetch(`https://api.themoviedb.org/3/search/multi?query=${searchInput.value}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`)
    .then(results => results.json())
    .then(data => {
        removeFromLocalStorage("search-results")
        removeFromLocalStorage("search-input")
        saveInLocalStorage("search-results", data.results)
        saveInLocalStorage("search-input", searchInput.value)
        searchResultCards(data.results)
        myFavSearch(data.results)
    })
    .catch((error) => console.log("ERROR!"))
}

window.onload = () => {
    const storedSearchResults = getFromLocalStorage("search-results")
    const storedInput = getFromLocalStorage("search-input")
    if(storedSearchResults) {
        searchTitle.textContent= `Watching results for "${storedInput}"`
        searchResultCards(storedSearchResults)
    }
    const storedFavorites = getFromLocalStorage("favorites")
    if(storedFavorites) {
        favorites = storedFavorites;
        favoriteSelection(favorites)
    }
}

