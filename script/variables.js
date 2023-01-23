//USUARIOS 

const users = [
    {
        username: "agustina",
        password: "agustina",
        favorites: [],
    },
    {
        username: "joaquin",
        password: "joaquin",
        favorites: [],
    },
    {
        username: "matias",
        password: "matias",
        favorites: [],
    },
    {
        username: "clarita",
        password: "clarita",
        favorites: [],
    },
    {
        username: "victoria",
        password: "victoria",
        favorites: [],
    },
];

//VARIABLES

const inputUsername = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");

const formLogin = document.querySelector("#login");
const logInContainer = document.querySelector(".login-container");
const logout = document.querySelector("#button-logout");

const webContainer = document.querySelector(".web-container");
const navbarContainer = document.querySelector(".navbar-container")

const favoriteSection = document.querySelector(".favorites-list")
const contactSection = document.querySelector(".contact-form-container")
const searchSection = document.querySelector(".search-container")

// GUARDAR INFORMACION EN LOCAL STORAGE, OBTENERLA Y ELIMINARLA

const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

// log in -- 

const wrongInfo = document.querySelector("#wrong-info");
const welcomeUser = document.querySelector("h1");

// modo oscuro

const modes = document.querySelector("#light-dark-mode");
const body = document.querySelector(".light-mode");

const moon = document.querySelector("#moon")
const sun = document.querySelector("#sun")

// navbar

const homeButton = document.querySelector("#home")
const favoriteButton = document.querySelector("#my-favorites")
const contactButton = document.querySelector("#contact-us")

// cards con fetch desde api, creadas con dom

const apiKey = "2bfe34db0d27d97661602c0ccc0e3df3"

const formMovie = document.querySelector("#search-btn")
const inputSearch = document.querySelector(".search-control")

const movieContainer = document.querySelector("#my-movies")
const seriesContainer = document.querySelector("#my-series")

//favorites section

let favorites = []

let currentUser = getFromLocalStorage("username")
const user = users.find((user) => user.username === currentUser);

const favContainer = document.querySelector(".favorites-container")

const deleteAllFavs = document.querySelector(".remove-all-favs")

let favoritesListMovies = getFromLocalStorage("favorites")
let favoritesListSeries = getFromLocalStorage("favorites")


// search

const eachUser = users.find((user) => user.username === currentUser)

let favoritesListSearch = getFromLocalStorage("favorites")

const searchResultsContainer = document.querySelector(".search-results")

const searchTitle = document.querySelector(".search-title")
const searchForm = document.querySelector(".search-form")
const searchInput = document.querySelector(".search-control")

//contact form

const contactForm = document.querySelector(".form-contact")

// random 

// constructor

const random = document.querySelector("#random")


