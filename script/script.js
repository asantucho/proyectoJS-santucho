// Usuarios de la plataforma

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

// log in - interacción con local storage y manipulación de nodos de html a partir de eventos

const inputUsername = document.querySelector("#input-username");
const inputPassword = document.querySelector("#input-password");

const formLogin = document.querySelector("#login");
const logInContainer = document.querySelector(".login-container");
const logout = document.querySelector("#button-logout");

// guardar información en el local storage

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

    console.log(foundUser)
    if (foundUser) {
        saveInLocalStorage("login", true);
        saveInLocalStorage("username", foundUser.username);
        logInContainer.style.display = "none";
        logout.style.display = "block";
        wrongInfo.style.display="none"
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
    } else if (key === false) {
        wrongInfo.style.display = "block";
        wrongInfo.style.border = "1px solid red";
        formLogin.reset();
    } else {
        wrongInfo.style.display = "none";
        logInContainer.style.display = "none";
        logout.style.display = "block";
        const username = getFromLocalStorage("username")
        welcomeUser.textContent = `Welcome ${username}`
    }
}

validateLogIn(getFromLocalStorage("login"));

//logout -- EVENTO ON CLICK

logout.onclick = () => {
    localStorage.removeItem("login");
    validateLogIn(getFromLocalStorage("login"));
    formLogin.reset();
};

// manipulando html con dom

// bienvenida a usuario -- EVENTO ON INPUT

inputUsername.oninput = () => {
        welcomeUser.textContent = `Welcome ${inputUsername.value}`
}

// agregando elementos en html desde js - peliculas

function movieCatalog(films) {
    const movieContainer = document.querySelector("#my-movies");
    let addNumber = 2;
    films.forEach((movie) => {
        const card = document.createElement("img");
        card.setAttribute("src", movie.image);
        card.className = `item item-${addNumber}`;
        movieContainer.appendChild(card);
        addNumber++
    });
}

movieCatalog(films);

// agregando elementos en html desde js - series

function seriesCatalog (series){
    const seriesContainer = document.querySelector("#my-series");
    let addNumber = 2;
    series.forEach (( show => {
        const card = document.createElement ("img");
        card.setAttribute ("src", show.image);
        card.setAttribute ("alt", show.title);
        card.className = `item item-${addNumber}`;
        seriesContainer.appendChild(card);
        addNumber++
    }))
}

// modo oscuro -- EVENTO ON CLICK

const modes = document.querySelector("#light-dark-mode");
const body = document.querySelector(".light-mode");

modes.onclick = () => {
    body.classList.toggle("dark-mode");
    if (body.className === "light-mode dark-mode") {
        modes.textContent = "Light mode";
    } else {
        modes.textContent = "Dark mode";
    }
};
