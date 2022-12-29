// El proyecto será de un sitio de películas y series para ver. En este sentido, cree un objeto por cada película y serie disponible en el catálogo. Dichos objetos estarán luego dentro de arrays.

//Películas. Array con objetos instanciados dentro

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
    image: "./images/the-godfather.jpeg"
    }]

//Series

let series = [
    {
        title: "breaking bad",
        id: 6,
        typeOfProduct: "series",
        seasons: 5,
        episodesPerSeason: 13,
        averageDurationPerEpisodeInMinutes: 47,
        genre: "suspense",
        producer: "vince gilligan",
        availableToDownload: false, 
        image: "./images/breaking-bad.jpg"
    },
    {
        title: "game of thrones",
        id: 7,
        typeOfProduct: "series",
        seasons: 8,
        episodesPerSeason: 10,
        averageDurationPerEpisodeInMinutes: 55,
        genre: "medieval fantasy",
        producer: "mark huffam",
        availableToDownload: false, 
        image: "./images/got.jpg"
    },{
        title: "the crown",
        id: 8,
        typeOfProduct: "series",
        seasons: 5,
        episodesPerSeason: 10,
        averageDurationPerEpisodeInMinutes: 52,
        genre: "historical drama",
        producer: "peter morgan",
        availableToDownload: false, 
        image: "./images/the-crown.jpg"
    },
    {
        title: "sex and the city",
        id: 9,
        typeOfProduct: "series",
        seasons: 6,
        episodesPerSeason: 10,
        averageDurationPerEpisodeInMinutes: 27,
        genre: "romantic comedy",
        producer: "darren star",
        availableToDownload: true, 
        image: "./images/sexandthecity.jpg"
    },
    {
        title: "succession",
        id: 10,
        typeOfProduct: "series",
        seasons: 3,
        episodesPerSeason: 10,
        averageDurationPerEpisodeInMinutes: 62,
        genre: "black comedy-drama",
        producer: "jesse armstrong",
        availableToDownload: true, 
        image: "./images/succession.jpg"
    },
]

// Manipulación de arrays con métodos y funciones de orden superior

// Quiero saber la CANTIDAD de productos en total con la que cuenta la página con método concat

const productsTotal = films.concat(series)


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

let pickForMe = () =>{
    let randomId = Math.ceil(Math.random()*productsTotal.length)
    return productsTotal.find(product => product.id === randomId)
}

pickForMe()

// Buscar qué películas y series se pueden descargar.

const download = productsTotal.filter((element) => {
    return element.availableToDownload === true
})






