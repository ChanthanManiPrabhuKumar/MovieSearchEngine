var inputElement = document.getElementById("movie-name")
var movieWrapperElement = document.getElementById("movie-wrapper")
var movieStatusElement = document.getElementById("status")
var searchbtn = document.getElementById("search-btn")

searchbtn.addEventListener ("click",function search(){
    movieWrapperElement.innerHTML = ""
    movieStatusElement.innerText = ""
    movieStatusElement.innerText = "Loooooding............."

    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputElement.value}`)
    .then( (res) =>{
        return res.json()
    } ).then( (res2) => {
        if (res2.Response == "True"){
    movieStatusElement.innerText = ""
            var movieDetails = res2.Search
            movieDetails.map( (movie,i) => {
                var movieCardElement = document.createElement("div")
                movieCardElement.className = "col-lg-3 col-md-4 col-sm-6"
                var movieImageElement = document.createElement("img")
                movieImageElement.src = movie.Poster
                var movieTitleElement = document.createElement("p")
                movieTitleElement.innerHTML = `<b>${movie.Title}</b>`
                var movieReleaseYearElement = document.createElement("p")
                movieReleaseYearElement.innerHTML = `<b>${movie.Year}</b>`
                movieCardElement.append(movieImageElement,movieTitleElement,movieReleaseYearElement)
                movieWrapperElement.append(movieCardElement)
            })
    }
    else{
        movieStatusElement.innerText = "404 Movies Not Found"
    }
})
})

