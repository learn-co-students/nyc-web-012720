class EventHandler {

  static clickHandler(adapter){
    document.addEventListener("click", function(event){
      if(event.target.className === 'up-vote'){
        let id = parseInt(event.target.parentNode.dataset.id)
        let movie = Movie.find(id)
        
        movie.incrementScore()
        adapter.updateResource(movie, { score: movie.score })
      } else if(event.target.dataset.purpose === 'delete'){
        let id = parseInt(event.target.parentNode.dataset.id)
        let movie = Movie.find(id)
  
        movie.remove()
        adapter.destroyResource(movie)
      } else if (event.target.innerText === 'Add Movie') {
        Movie.swapForm(event.target)
      }
    })
  }

  static submitHandler(adapter){
    document.addEventListener('submit', function(event){
      event.preventDefault()
      let form = event.target
      let title = form.title.value
      let imageUrl = form.imageUrl.value
      let year = form.year.value
      let score = 0
      
      let movie = new Movie({ title, imageUrl, year, score })
      
      adapter.createResource(movie)
      .then(renderMovie)
  
      Movie.swapButton(form)
    })
  }
}