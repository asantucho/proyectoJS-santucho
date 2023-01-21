// manipulando html con dom y api 

// variables para página principal

const apiKey = "2bfe34db0d27d97661602c0ccc0e3df3"

const formMovie = document.querySelector("#search-btn")
const inputSearch = document.querySelector(".search-control")

const movieContainer = document.querySelector("#my-movies")
const seriesContainer = document.querySelector("#my-series")

//fetch a peliculas populares

const moviesToHtml = (array) => {

    array.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "swiper-slide";
        card.innerHTML = `
        <img src = "https://image.tmdb.org/t/p/original${movie.poster_path}" alt = "${movie.title}">
        <button class = "button-fav-movies" id = "button-${movie.id}">Add to Favorites </button>`
        movieContainer.appendChild(card);
    });
}

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    moviesToHtml(data.results)
    myFavsMovies(data.results)
})
.catch((error) => console.log("ERROR!"))

//series populares desde api

const seriesToHtml = (array) => {

    array.forEach((series) => {
        const card = document.createElement("div");
        card.className = "swiper-slide";
        card.innerHTML = `
        <img src = "https://image.tmdb.org/t/p/original${series.poster_path}" alt = "${series.name}">
        <button class = "button-fav-series" id = "button-${series.id}">Add to Favorites </button>`
        seriesContainer.appendChild(card);
    });
}

fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
.then(response => response.json())
.then((data) => {
    console.log(data)
    seriesToHtml(data.results)
    myFavsSeries(data.results)
    })
.catch((error) => console.log("ERROR!"))

// carrusel con swiper

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    // loop: true,
    // loopAdditionalSlides: 0,
    // loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // }
});