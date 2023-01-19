// eventos on click en elementos de la navbar.

//home

const homeButton = document.querySelector("#home")

homeButton.onclick = () => {
    webContainer.style.display= "block";
    contactSection.style.display="none";
    favoriteSection.style.display="none";
    searchSection.style.display="none";
}

//My favorites

const favoriteButton = document.querySelector("#my-favorites")

favoriteButton.onclick = () => {
    favoriteSection.style.display="block";
    searchSection.style.display="none";
    contactSection.style.display="none";
    webContainer.style.display= "none";
}

//Contact us

const contactButton = document.querySelector("#contact-us")

contactButton.onclick = () => {
    contactSection.style.display="block";
    favoriteSection.style.display="none";
    searchSection.style.display="none";
    webContainer.style.display= "none";
}
