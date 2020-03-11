const movies = [
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985,
    score: 0
  },
  { 
    title: 'Free Willy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
    year: 1993,
    score: 0  
  },
  { 
    title: 'Top Gun',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    year: 1986,
    score: 0  
  },
  { 
    title: 'Mean Girls',
    imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
    year: 2004,
    score: 0  
  },
  { 
    title: 'Parasite',
    imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
    year: 2019,
    score: 0  
  }
]
const ul = document.querySelector("ul")
const container = document.getElementById("image-container")


document.addEventListener('DOMContentLoaded', function(){

  
  movies.forEach(function(movie){
    addMovie(movie)
  })

  // get the button
  // add a listener to the button - click
  // get the current score from the DOM
  // increment by 1
  // update the DOM

  document.addEventListener("click", function(event){
    if(event.target.className === 'up-vote'){
      let button = event.target
      console.dir(button)
      let span = button.parentNode.querySelector('span')
      let score = parseInt(span.innerText)
      score++

      span.innerText = score
    } else if(event.target.dataset.purpose === 'delete'){
      event.target.parentNode.remove()
    } else if (event.target.innerText === 'Add Movie') {
      let button = event.target
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
  })

  // √1. create element for button
  // √2. append it to the dom
  // √3. add event listener to button - click
  // √4. render the form/delete button
  // √5. event listener for form - submit
  // √6. render movie using form data
  // √7. delete the form, add button

  let addMovieButton = document.createElement("button")
  addMovieButton.innerText = 'Add Movie'
  let welcome = document.getElementById("welcome-image")
  welcome.insertAdjacentElement("afterend", addMovieButton)
  
})

function addMovie(movie){
  const li = document.createElement('li')

  li.className = "movie"

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


