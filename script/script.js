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
    console.log ("anda?")
    event.preventDefault ()
    if (inputUsername.value === users.username && inputPassword.value === users.password){
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