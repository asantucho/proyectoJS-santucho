// random pick

// funcion

const pickForMe = (array)=>{
    let randomPosition = Math.ceil(Math.random()*array.length)
    console.log(randomPosition)
    return array[randomPosition]
}

// constructor

const random = document.querySelector("#random")

// fetch a API. Ejecución de funcion. Modal de swwet alert con el resultado 

fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
.then (results => results.json())
.then (data => {
    console.log(data)
    random.onclick = () =>{
        pickForMe(data.results)
        console.log(pickForMe(data.results))
        let randomResult = pickForMe(data.results)
        Swal.fire({
            title: `${randomResult.title || randomResult.name}`,
            imageUrl: `//image.tmdb.org/t/p/original${randomResult.poster_path}"`,
            imageWidth: 200,
            imageHeight:400,
        })
    }
})
.catch (error => console.log("ERROR!"))

// swal - sweet alert


