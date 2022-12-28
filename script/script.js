// Usuarios de la plataforma

const users = [
    {
        username : "agustina",
        password : "agustina"
    },
    {
        username : "joaquin",
        password : "joaquin"
    },
    {
        username : "matias",
        password : "matias"
    },
    {
        username : "clarita",
        password : "clarita"
    },
    {
        username : "victoria",
        password : "victoria"
    }
]

const inputUsername = document.querySelector("#input-username")
const inputPassword = document.querySelector("#input-password")

const formLogin = document.querySelector ("#login")
const logInContainer = document.querySelector (".login-container")

// guardar información en el local storage

const saveInLocalStorage = (key, value) => {
    localStorage.setItem (key, JSON.stringify(value))
}


const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// log in

const wrongInfo = document.querySelector("#wrong-info")

formLogin.onsubmit = (event) => {
    event.preventDefault ()
    if (inputUsername.value === users[0].username && inputPassword.value === users[0].password){
        saveInLocalStorage("login", true)
        logInContainer.style.display = "none" 
        console.log ("esta parte esta andando")
    } else {
        wrongInfo.style.display = "block"
    }
}

//validar login

function validateLogIn (key) {
    if (key !== true){
        logInContainer.style.display = "block"
        wrongInfo.style.display = "block"
    } else {
        logInContainer.style.display = "none"
    }
}

validateLogIn(getFromLocalStorage("login"))

//logout

const logout = document.querySelector("#button-logout")

logout.onclick = () => {
    localStorage.removeItem ("login")
    validateLogIn(getFromLocalStorage("login"))
    formLogin.reset()
}


// manipulando html con dom


function movieCatalog (films){
    const movieContainer = document.querySelector("#my-movies")
    films.forEach( (movie) => {
        const card = document.createElement ("div")
        card.className = "item"
        card.innerHTML = `
        <div class = "container-img">
            <img src = ${movie.image} alt = ${movie.title}>
            <h3>${movie.title}</h3>
        </div>`
        movieContainer.appendChild (card)
    })
}

movieCatalog(films)