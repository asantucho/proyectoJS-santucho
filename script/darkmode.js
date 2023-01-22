// modo oscuro -- EVENTO ON CLICK

modes.onclick = () => {
    body.classList.toggle("dark-mode");
    saveInLocalStorage("night-mode", true);
    if (body.className === "light-mode dark-mode") {
        sun.style.display = "block";
        moon.style.display = "none";
    } else if (body.className === "light-mode"){
        sun.style.display = "none";
        moon.style.display = "block";
        saveInLocalStorage("night-mode", false);
        body.classList.remove("dark-mode");
    }
};

function validateDarkMode (isDarkMode){
    if(isDarkMode){
        body.classList.toggle("dark-mode");
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        body.classList.remove("dark-mode")
        }
}

validateDarkMode(getFromLocalStorage("night-mode"));