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




// El proyecto será de un sitio de películas y series para ver. En este sentido, cree un objeto por cada película y serie disponible en el catálogo. Dichos objetos estarán luego dentro de arrays.

//Películas.Array con objetos instanciados dentro

let films = [
    {title: "titanic", 
    typeOfProduct: "movie", 
    durationInMinutes: 194, 
    director: "james cameron", 
    releaseYear: 1998, 
    genre: "drama", 
    availableToDownload: true
    }, 
    {title: "avengers", 
    typeOfProduct: "movie", 
    durationInMinutes: 149, 
    director: "anthony and joe russo", 
    releaseYear: 2018, genre: "action", 
    availableToDownload: false
    }, 
    {title: "big fish", 
    typeOfProduct: "movie", 
    durationInMinutes: 144, 
    director: "tim burton", 
    releaseYear: 2010, 
    genre: "fantasy", 
    availableToDownload: true
    }, 
    {title: "black swan", 
    typeOfProduct: "movie", 
    durationInMinutes: 107, 
    director: "darren aronofsky", 
    releaseYear: 2010, 
    genre: "thriller",
    availableToDownload: true
    }, 
    {title: "the godfather", 
    typeOfProduct: "movie", 
    durationInMinutes: 175, 
    director: "francis ford coppola", 
    releaseYear: 1972, 
    genre: "gangster", 
    availableToDownload: false
    }]

//Series. Objetos instanciados a partir de una función y por fuera del array que luego los englobará 

function Series (title, typeOfProduct, seasons, episodesPerSeason, averageDurationPerEpisodeInMinutes, genre, producer, availableToDownload){
    this.title = title;
    this.typeOfProduct = typeOfProduct;
    this.seasons = seasons;
    this.episodesPerSeason = episodesPerSeason;
    this.averageDurationPerEpisodeInMinutes = averageDurationPerEpisodeInMinutes;
    this.genre = genre;
    this.producer = producer;
    this.availableToDownload = availableToDownload;
}

const breakingBad = new Series ("breaking bad", "series", 5, 13, 47, "suspense", "vince gilligan", false)
const gameOfThrones = new Series ("game of thrones", "series", 8, 10, 55, "medieval fantasy", "mark huffam", false)
const theCrown = new Series ("the crown", "series", 5, 10, 52, "historical drama", "peter morgan", false)
const sexAndTheCity = new Series ("sex and the city", "series", 6, 10, 27, "romantic comedy", "darren star", true)
const succession = new Series ("succession", "series", 3, 10, 62, "black comedy-drama",  "jesse armstrong", true)


const shows = [breakingBad, gameOfThrones, theCrown, sexAndTheCity, succession]

// Manipulación de arrays con métodos y funciones de orden superior

// Quiero saber la CANTIDAD de productos en total con la que cuenta la página con método concat

const productsTotal = films.concat(shows)

console.log(productsTotal)

//Ordenar las películas y series en orden alfabético

const alphabeticalProductsTotal = [...productsTotal].sort((a, b) => {
    if ( a.title < b.title ){
        return -1
    } else if ( a.title > b.title){
        return 1
    } else {
        return 0
    }
})

console.log(alphabeticalProductsTotal)

// Buscar una película en particular con find

let userWantToWatch = prompt ("What do you want to watch tonight?").toLowerCase()

const thisMovie = films.find(Movie => Movie.title === userWantToWatch) 

console.log(thisMovie)

// Buscar qué películas y series se pueden descargar. Ver si la serie o película ingresada por el usuario se encuentra disponible para descargar

const download = productsTotal.filter((element) => {
    return element.availableToDownload === true
})

console.log (download)

const canDownload = () => {
    let wantToDownload = prompt("What show or movie do you want to download?")
    if (download.find(product => product.title === wantToDownload)){
        confirm("This product is available for download. Do you want to download it now?")
    } else {
        alert ("Sorry, this product is not available to download at the moment.")
    }
}

canDownload()

console.log(canDownload)

// Creación de un nuevo array partiendo de productsTotal con método slice para no modificar el original

const moviesWithSlice = productsTotal.slice (0, 5)

console.log(moviesWithSlice)

// Obtener cuantos productos son series con filter

const howManyShows = productsTotal.filter((Series) => {
    return Series.typeOfProduct === "series"
})

console.log(howManyShows)






