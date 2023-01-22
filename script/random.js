// random pick

// funcion

const pickForMe = (array)=>{
    let randomPosition = Math.ceil(Math.random()*array.length)
    return array[randomPosition]
}

// fetch a API. Ejecución de funcion. Modal de swwet alert con el resultado 

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
.then (results => results.json())
.then (data => {
    random.onclick = () =>{
        let randomResult = pickForMe(data.results)
        Swal.fire({
            title: `${randomResult.title || randomResult.name}`,
            imageUrl: "./images/shuffle-solid.svg",
            imageWidth: 200,
            imageHeight:400,
            text: "Hope you enjoy our selection for you!"
        })
    }
})
.catch (error => console.log("ERROR!"))


