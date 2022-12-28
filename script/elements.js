// El proyecto será de un sitio de películas y series para ver. En este sentido, cree un objeto por cada película y serie disponible en el catálogo. Dichos objetos estarán luego dentro de arrays.

//Películas.Array con objetos instanciados dentro

let films = [
    {title: "titanic", 
    id : 1,
    typeOfProduct: "movie", 
    durationInMinutes: 194, 
    director: "james cameron", 
    releaseYear: 1998, 
    genre: "drama", 
    availableToDownload: true,
    image: "./images/titanic.jpg"
    }, 
    {title: "avengers", 
    id : 2,
    typeOfProduct: "movie", 
    durationInMinutes: 149, 
    director: "anthony and joe russo", 
    releaseYear: 2018, 
    genre: "action", 
    availableToDownload: false,
    image: "./images/avengers.jpg"
    }, 
    {title: "big fish", 
    id : 3,
    typeOfProduct: "movie", 
    durationInMinutes: 144, 
    director: "tim burton", 
    releaseYear: 2010, 
    genre: "fantasy", 
    availableToDownload: true,
    image: "./images/big-fish.jpg"
    }, 
    {title: "black swan", 
    id : 4,
    typeOfProduct: "movie", 
    durationInMinutes: 107, 
    director: "darren aronofsky", 
    releaseYear: 2010, 
    genre: "thriller",
    availableToDownload: true,
    image: "./images/black-swan.jpg"
    }, 
    {title: "the godfather", 
    id : 5,
    typeOfProduct: "movie", 
    durationInMinutes: 175, 
    director: "francis ford coppola", 
    releaseYear: 1972, 
    genre: "gangster", 
    availableToDownload: false, 
    image: "./images/the-godfather"
    }]

//Series. Objetos instanciados a partir de una función y por fuera del array que luego los englobará 

function Series (title, id, typeOfProduct, seasons, episodesPerSeason, averageDurationPerEpisodeInMinutes, genre, producer, availableToDownload){
    this.title = title;
    this.id = id;
    this.typeOfProduct = typeOfProduct;
    this.seasons = seasons;
    this.episodesPerSeason = episodesPerSeason;
    this.averageDurationPerEpisodeInMinutes = averageDurationPerEpisodeInMinutes;
    this.genre = genre;
    this.producer = producer;
    this.availableToDownload = availableToDownload;
}

const breakingBad = new Series ("breaking bad", 6, "series", 5, 13, 47, "suspense", "vince gilligan", false)
const gameOfThrones = new Series ("game of thrones", 7, "series", 8, 10, 55, "medieval fantasy", "mark huffam", false)
const theCrown = new Series ("the crown", 8, "series", 5, 10, 52, "historical drama", "peter morgan", false)
const sexAndTheCity = new Series ("sex and the city", 9, "series", 6, 10, 27, "romantic comedy", "darren star", true)
const succession = new Series ("succession", 10, "series", 3, 10, 62, "black comedy-drama",  "jesse armstrong", true)


const shows = [breakingBad, gameOfThrones, theCrown, sexAndTheCity, succession]

// Manipulación de arrays con métodos y funciones de orden superior

//Agregar una nueva película al catálogo

const newMovie = films.push(
{title: "scarface",
id : 11,  
typeOfProduct: "movie", 
durationInMinutes: 170, 
director: "brian de palma", 
releaseYear: 1983, 
genre: "crime", 
availableToDownload: true,
image: "./images/scarface.jpg"
})


// Quiero saber la CANTIDAD de productos en total con la que cuenta la página con método concat

const productsTotal = films.concat(shows)


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


// Buscar una película o serie en particular con find

// let userWantToWatch = prompt ("What do you want to watch tonight?").toLowerCase()

// const thisProduct = productsTotal.find(product => product.title === userWantToWatch) 

// El usuario no sabe que ver y pide al sitio que escoja por el, con Math.random

let pickForMe = () =>{
    let randomId = Math.ceil(Math.random()*productsTotal.length)
    console.log(randomId)
    return productsTotal.find(product => product.id === randomId)
}

pickForMe()

// Buscar qué películas y series se pueden descargar. Ver si la serie o película ingresada por el usuario se encuentra disponible para descargar

const download = productsTotal.filter((element) => {
    return element.availableToDownload === true
})


// const canDownload = () => {
//     //let wantToDownload = prompt("What show or movie do you want to download?")
//     if (download.find(product => product.title === wantToDownload)){
//         confirm("This product is available for download. Do you want to download it now?")
//     } else {
//         alert ("Sorry, this product is not available to download at the moment.")
//     }
// }

//canDownload()


// Creación de un nuevo array partiendo de productsTotal con método slice para no modificar el original

const moviesWithSlice = productsTotal.slice (0, 5)


// Obtener cuantos productos son series con filter

const howManyShows = productsTotal.filter((Series) => {
    return Series.typeOfProduct === "series"
})





