// //LOG IN
// const userEmail = "asantucho35@gmail.com"
// const password = "LamanodeD10s"

// let userName = prompt("What is your name?")
// let logInEmail = prompt ("Please, enter your email address")
// let logInPassword = prompt ("Your password?")

// //verificación si usuario y contraseña coinciden con base de datos con estructura condicional

// const signIn = (logInEmail, logInPassword) => {
//         if (logInEmail === userEmail && logInPassword === password){
//             alert(`Welcome to our website ${userName}`)
//         } else if (logInEmail !== userEmail){
//             alert("Sorry, that email address is not a valid one")
//         } else if (logInPassword !== password){
//             alert("Sorry, the password is incorrect")
//         } else if (logInEmail !== userEmail && logInPassword !== password){
//             alert("Email and password are not valid")
//         } else {
//             alert ("Oops. That is not a registered user")
//         }
// }

// signIn (logInEmail, logInPassword)

// //Verificación si el email es válido (contiene arroba) con un bucle

// const validEmail = (logInEmail) => {
//     let itIsAnEmail = false
//     logInEmail = prompt("Please, enter your email again")
//         while (itIsAnEmail === false){
//         if (logInEmail.includes("@")){
//             itIsAnEmail = true
//         } else {
//             logInEmail = prompt("Please enter a valid email - must contain @")
//         }
//     } alert ("You entered a valid email successfully!")
// }

// validEmail (logInEmail)

// //Verificación de si la contraseña es segura (siendo el criterio si tiene 8 caracteres o más) con estructura condicional y posibilidad de cambiar el valor de la variable con anidamiento de condicionales.

// const safePassword = (logInPassword) => {
//     logInPassword = prompt ("Please re enter your password")
//     let question = null 
//     if (logInPassword.length >= 8){
//         alert ("Your password is safe!")
//     } else {
//         question = (prompt("Your password is not safe. Would you like to change it? Answer with yes or no")).toLowerCase()
//             if (question === "yes"){
//                 logInPassword = prompt("Enter your new password")
//                 alert ("Your password was successfully changed!")
//             } else if (question === "no"){
//                 alert ("Ok. We won't change your password.")
//             } else {
//                 alert("That is not a valid answer")
//             }
//         }
//     }

// safePassword (logInPassword)

// //Verificación de si la contraseña contiene números con método test dentro de un bucle

// const passwordWithNumbers = (logInPassword) =>{
//     let itHasNumbers = false
//     logInPassword = prompt("Please re enter your password")
//     while (itHasNumbers === false){
//         if (/[0-9]/.test(logInPassword)){
//             itHasNumbers = true
//         } else {
//             logInPassword = prompt("Enter your new password. REMEMBER to include at least one number")
//         } 
//     } alert ("Your password was successfully changed!")
// }

// passwordWithNumbers(logInPassword)

function Movie (name, typeOfProduct, durationInMinutes, director, releaseYear, genre, availableToDownload){
    this.name = name;
    this.typeOfProduct = typeOfProduct;
    this.durationInMinutes = durationInMinutes;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.availableToDownload = availableToDownload;
}

const titanic = new Movie ("titanic", "movie", 194, "james cameron", 1998, "drama", true)
const avengers = new Movie ("avengers: infinity war", "movie", 149, "anthony and joe russo", 2018, "action", false)
const bigFish = new Movie ("big fish", "movie", 124, "tim burton", 2004, "fantasy", true)
const blackSwan = new Movie ("black swan", "movie", 107, "darren aronofsky", 2010, "thriller", true)
const godfather = new Movie ("the godfather", "movie", 175, "francis ford coppola", 1972, "gangster", false)

const series = (title, seasons, episodesPerSeason, averageDurationPerEpisodeInMinutes, genre, producer, availableToDownload ) =>{
    return ({
        title : title,
        seasons : seasons,
        episodesPerSeason : episodesPerSeason,
        averageDurationPerEpisodeInMinutes : averageDurationPerEpisodeInMinutes,
        genre : genre,
        producer : producer,
        availableToDownload: availableToDownload,
    })
}

const breakingBad = new series ("breaking bad", 5, 13, 47, "suspense", "vince gilligan", false)
const gameOfThrones = new series ("game of thrones", 8, 10, 55, "medieval fantasy", "mark huffam", false)
const theCrown = new series ("the crown", 5, 10, 52, "historical drama", "peter morgan", false)
const sexAndTheCity = new series ("sex and the city", 6, 10, 27, "romantic comedy", "darren star", true)
const succession = new series ("succession", 3, 10, 62, "black comedy-drama",  "jesse armstrong", true)

