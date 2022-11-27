//LOG IN
const userEmail = "asantucho35@gmail.com"
const password = "LamanodeD10s"

let userName = prompt("What is your name?")
let logInEmail = prompt ("Please, enter your email address")
let logInPassword = prompt ("Your password?")



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



const validEmail = (logInEmail) => {
    let itIsAnEmail = false
    logInEmail = prompt("Please, enter your email again")
        while (itIsAnEmail === false){
        if (logInEmail.includes("@")){
            itIsAnEmail = true
        } else {
            logInEmail = prompt("Please enter a valid email - must contain @")
        }
    }
}

validEmail (logInEmail)



