//LOG IN
const userEmail = "asantucho35@gmail.com"
const password = "LamanodeD10s"

let userName = prompt("What is your name?")
let logInEmail = prompt ("Please, enter your email address")
let logInPassword = prompt ("Your password?")

//usuario y contraseña coinciden con base de datos

const signIn = (logInEmail, logInPassword) => {
        if (logInEmail === userEmail && logInPassword === password){
            alert(`Welcome to our website ${userName}`)
        } else if (logInEmail !== userEmail){
            alert("Sorry, that email address is not a valid one")
        } else if (logInPassword !== password){
            alert("Sorry, the password is incorrect")
        } else if (logInEmail !== userEmail && logInPassword !== password){
            alert("Email and password are not valid")
        } else {
            alert ("Oops. That is not a registered user")
        }
}

signIn (logInEmail, logInPassword)

//Email válido

const validEmail = (logInEmail) => {
    let itIsAnEmail = false
    logInEmail = prompt("Please, enter your email again")
        while (itIsAnEmail === false){
        if (logInEmail.includes("@")){
            itIsAnEmail = true
        } else {
            logInEmail = prompt("Please enter a valid email - must contain @")
        }
    } alert ("You entered a valid email successfully!")
}

validEmail (logInEmail)

//Es segura la contraseña? 

const safePassword = (logInPassword) => {
    logInPassword = prompt ("Please re enter your password")
    let question = null 
    if (logInPassword.length >= 8){
        alert ("Your password is safe!")
    } else {
        question = (prompt("Your password is not safe. Would you like to change it? Answer with yes or no")).toLowerCase()
            if (question === "yes"){
                logInPassword = prompt("Enter your new password")
                alert ("Your password was successfully changed!")
            } else if (question === "no"){
                alert ("Ok. We won't change your password.")
            } else {
                alert("That is not a valid answer")
            }
        }
    }

safePassword (logInPassword)

//La contraseña tiene numeros?

const passwordWithNumbers = (logInPassword) =>{
    let itHasNumbers = false
    logInPassword = prompt("Please re enter your password")
    while (itHasNumbers === false){
        if (/[0-9]/.test(logInPassword)){
            itHasNumbers = true
        } else {
            logInPassword = prompt("Enter your new password. REMEMBER to include at least one number")
        } 
    } alert ("Your password was successfully changed!")
}

passwordWithNumbers(logInPassword)