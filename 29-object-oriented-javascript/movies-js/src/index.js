const BASE_URL = "http://localhost:3000/api/v1/movies"
const adapter = new Adapter(BASE_URL)

document.addEventListener('DOMContentLoaded', function(){
  adapter.getResources()
  .then(renderMovies)
  
  EventHandler.clickHandler(adapter)
  EventHandler.submitHandler(adapter, renderMovie)
  Movie.createButton(document.getElementById("welcome-image"))
})

function renderMovies(moviesData) {
  moviesData.forEach(renderMovie)
}

function renderMovie(movieObj){
  let movie = new Movie(movieObj)
  movie.render(document.querySelector("ul"))
}