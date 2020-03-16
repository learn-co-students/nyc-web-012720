const ul = document.querySelector("ul")
const container = document.getElementById("image-container")
const BASE_URL = "http://localhost:3000/api/v1/movies"

document.addEventListener('DOMContentLoaded', function(){

  getMovies()
  
  document.addEventListener("click", function(event){
    if(event.target.className === 'up-vote'){
      incrementScore(event.target)
    } else if(event.target.dataset.purpose === 'delete'){
      removeMovie(event.target)
    } else if (event.target.innerText === 'Add Movie') {
      createMovieForm(event.target)
    }
  })

  let addMovieButton = document.createElement("button")
  addMovieButton.innerText = 'Add Movie'
  let welcome = document.getElementById("welcome-image")
  welcome.insertAdjacentElement("afterend", addMovieButton)
  
})

function addMovie(movie){
  const li = document.createElement('li')

  li.className = "movie"
  li.dataset.id = movie.id

  li.innerHTML = `
    <h3>${movie.title}</h3>
    <img alt=""
        src=${movie.imageUrl} />
    <h4>Year: </h4>
    <p>${movie.year}</p>
    <h4>Score: <span>${movie.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete">&times;</button>
  `

  ul.append(li)
}

function getMovies() {
  fetch(BASE_URL)
  .then(response => response.json())
  .then(movies => {
    movies.forEach(function(movie){
      addMovie(movie)
    })
  })
}

function incrementScore(button) {
  // update the DOM with the new score
  let span = button.parentNode.querySelector('span')
  let score = parseInt(span.innerText)
  score++

  span.innerText = score

  // making fetch request to update the database
  let id = button.parentNode.dataset.id

  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({ score }) // <= { score } is an ES6 that is equivalent to { score: score }
  })
  .then(response => response.json())
  .then(console.log)
}

function removeMovie(button) {
  // let's use pessimistic rendering
  button.parentNode.remove()
}

function createMovieForm(button) {
  let newForm = document.createElement("form")
  newForm.innerHTML = `
    <label>Title:</label>
    <input type="text" name="title" />
    <br/>
    <label>Image URL:</label>
    <input type="text" name="imageUrl" />
    <br/>
    <label>Year:</label>
    <input type="text" name="year" />
    <br/>
    <input type="submit" />
  `

  document.body.replaceChild(newForm, button)

  newForm.addEventListener('submit', function(event){
    event.preventDefault()
    let title = event.target.title.value
    let imageUrl = event.target.imageUrl.value
    let year = event.target.year.value

    let movie = { title: title, imageUrl: imageUrl, year: year }

    addMovie(movie)

    document.body.replaceChild(button, event.target)
  })
}