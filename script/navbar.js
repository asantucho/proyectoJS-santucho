// eventos on click en elementos de la navbar.

//home

const homeButton = document.querySelector("#home")

homeButton.onclick = () => {
    webContainer.style.display= "block";
    contactSection.style.display="none";
    favoriteSection.style.display="none";
    searchSection.style.display="none";
    localStorage.removeItem = "section"
    saveInLocalStorage("section", "home")
}

//My favorites

const favoriteButton = document.querySelector("#my-favorites")


favoriteButton.onclick = () => {
    favoriteSection.style.display="block";
    searchSection.style.display="none";
    contactSection.style.display="none";
    webContainer.style.display= "none";
    localStorage.removeItem = "section"
    saveInLocalStorage("section", "favorites")
}

window.onload = () => {
    const storedFavorites = getFromLocalStorage("favorites")
    if(storedFavorites) {
        favorites = storedFavorites;
        favoriteSelection(favorites)
    }
}

//Contact us

const contactButton = document.querySelector("#contact-us")

contactButton.onclick = () => {
    contactSection.style.display="block";
    favoriteSection.style.display="none";
    searchSection.style.display="none";
    webContainer.style.display= "none";
    localStorage.removeItem="section"
    saveInLocalStorage("section", "contact")
}

//validate section

const validateSection = (key) =>{
    if (key === "home"){
        webContainer.style.display= "block";
        contactSection.style.display="none";
        favoriteSection.style.display="none";
        searchSection.style.display="none";
        localStorage.removeItem = "section"
        saveInLocalStorage("section", "home")
    } else if (key ==="favorites"){
        favoriteSection.style.display="block";
        searchSection.style.display="none";
        contactSection.style.display="none";
        webContainer.style.display= "none";
        localStorage.removeItem = "section"
        saveInLocalStorage("section", "favorites")
    } else if (key === "contact"){
        contactSection.style.display="block";
        favoriteSection.style.display="none";
        searchSection.style.display="none";
        webContainer.style.display= "none";
        localStorage.removeItem="section"
        saveInLocalStorage("section", "contact")
    } else if (key === "search"){
        const searchTitle = document.querySelector(".search-title")
        const searchInput = document.querySelector(".search-control")
        searchSection.style.display="block";
        searchTitle.textContent= `Watching results for "${searchInput.value}"`
        favoriteSection.style.display="none";
        contactSection.style.display="none";
        webContainer.style.display= "none";
        localStorage.removeItem = "section"
        saveInLocalStorage("section", "search")
    }
}

validateSection(getFromLocalStorage("section"))