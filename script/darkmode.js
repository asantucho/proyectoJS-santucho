// modo oscuro -- EVENTO ON CLICK

const modes = document.querySelector("#light-dark-mode");
const body = document.querySelector(".light-mode");

modes.onclick = () => {
    body.classList.toggle("dark-mode");
    saveInLocalStorage("night-mode", true);
    if (body.className === "light-mode dark-mode") {
        modes.textContent = "Light mode";
    } else if (body.className === "light-mode"){
        modes.textContent = "Dark mode";
        saveInLocalStorage("night-mode", false);
        body.classList.remove("dark-mode");
    }
};

function validateDarkMode (isDarkMode){
    if(isDarkMode){
        body.classList.toggle("dark-mode");
        modes.textContent = "Light mode";
    } else {
        body.classList.remove("dark-mode")
        }
}

validateDarkMode(getFromLocalStorage("night-mode"));