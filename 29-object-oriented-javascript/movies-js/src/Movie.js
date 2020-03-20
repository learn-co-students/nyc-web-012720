class Movie {
  static all = []
  
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.score = movieObj.score
    this.imageUrl = movieObj.imageUrl
    this.node = null

    Movie.all.push(this)
  }

  render(ul){
    let li = this.createLi()
    ul.append(li)
  }

  createLi(){
    const movieLi = document.createElement('li')

    movieLi.className = "movie"
    movieLi.dataset.id = this.id

    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src=${this.imageUrl} />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete">&times;</button>
    `

    this.node = movieLi

    return movieLi
  }

  incrementScore(){
    this.score++
    let span = this.node.querySelector('span')
  
    span.innerText = this.score
  }

  remove(){
    this.node.remove()
  }
  
  static formButton(){
    let addMovieButton = document.createElement("button")
    addMovieButton.innerText = 'Add Movie'
    return addMovieButton
  }
  
  static createButton(ele){
    ele.insertAdjacentElement("afterend", this.formButton())
  }

  static swapForm(ele){
    document.body.replaceChild(this.form(), ele)
  }

  static swapButton(ele){
    document.body.replaceChild(this.formButton(), ele)

  }
  
  static form(){
    let form = document.createElement("form")

    form.innerHTML = `
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

    return form
  }
  
  static find(id){
    return this.all.find(movie => movie.id === id)
  }
}