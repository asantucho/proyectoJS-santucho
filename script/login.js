// LOG IN & LOG OUT

//USUARIOS 

const users = [
    {
        username: "agustina",
        password: "agustina",
    },
    {
        username: "joaquin",
        password: "joaquin",
    },
    {
        username: "matias",
        password: "matias",
    },
    {
        username: "clarita",
        password: "clarita",
    },
    {
        username: "victoria",
        password: "victoria",
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

// GUARDAR INFORMACION EN LOCAL STORAGE Y OBTENERLA 

const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// log in -- EVENTO ON SUBMIT

const wrongInfo = document.querySelector("#wrong-info");

formLogin.onsubmit = (event) => {
    event.preventDefault();
    const foundUser = users.find((user) =>
        user.username === inputUsername.value &&
        user.password === inputPassword.value
    );
    if (foundUser) {
        saveInLocalStorage("login", true);
        saveInLocalStorage("username", foundUser.username);
        logInContainer.style.display = "none";
        webContainer.style.display= "block";
        navbarContainer.style.display="flex";
        logout.style.display = "block";
        wrongInfo.style.display="none";
        contactSection.style.display="none";
        favoriteSection.style.display="none";
        searchSection.style.display="none";
        const username = getFromLocalStorage("username")
        welcomeUser.textContent = `Welcome ${username}!`
    } else {
        wrongInfo.style.display = "block";
        wrongInfo.style.border = "1px solid red";
        logout.style.display = "none";
        formLogin.reset();
    }
};

//validar login

const welcomeUser = document.querySelector("h1");

function validateLogIn(key) {
    if (key !== true) {
        logInContainer.style.display = "block";
        logout.style.display = "none";
        welcomeUser.textContent = `Welcome username`
    } else if (key === false) {
        wrongInfo.style.display = "block";
        wrongInfo.style.border = "1px solid red";
        formLogin.reset();
    } else {
        wrongInfo.style.display = "none";
        logInContainer.style.display = "none";
        logout.style.display = "block";
        webContainer.style.display= "block";
        navbarContainer.style.display="block";
        contactSection.style.display="none";
        favoriteSection.style.display="none";
        searchSection.style.display="none";
        const username = getFromLocalStorage("username")
        welcomeUser.textContent = `Welcome ${username}!`
    }
}

validateLogIn(getFromLocalStorage("login"));

//logout -- EVENTO ON CLICK

logout.onclick = () => {
    localStorage.removeItem("login");
    validateLogIn(getFromLocalStorage("login"));
    localStorage.removeItem("username");
    webContainer.style.display="none";
    navbarContainer.style.display="none";

    formLogin.reset();
};







