// LOG IN & LOG OUT

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

function validateLogIn(key) {
    if (key !== true) {
        logInContainer.style.display = "block";
        logout.style.display = "none";
        contactSection.style.display="none";
        favoriteSection.style.display="none";
        searchSection.style.display="none";
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
    removeFromLocalStorage("login")
    validateLogIn(getFromLocalStorage("login"));
    removeFromLocalStorage("username")
    removeFromLocalStorage("section")
    removeFromLocalStorage("favorites")
    webContainer.style.display="none";
    navbarContainer.style.display="none";
    logInContainer.style.display = "block"


    formLogin.reset();
};







