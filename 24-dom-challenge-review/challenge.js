// √1. get the counter from the dom
// √2. increment the innerText every second
// √3. add listeners on the + and - buttons increment/decrement
//    the counter respectively
// √4. add listener to <3 button - 
// √5. add listener to pause button 
//      √- disable other buttons
//      √ pause counter
//      - change text of button to resume
// √6. add listener to submit button - get comment from form,
//    render comment on DOM


document.addEventListener("DOMContentLoaded", function(event){
  let counter = document.getElementById("counter")
  let likeList = document.getElementsByClassName('likes')[0]
  let commentList = document.getElementById('list')
  let likeCount = {}

  let timer = setInterval(function(){
    // √get the value of the counter
    // √increment the value
    // √re-render the value in the h1
    incrementCounter(1)
  }, 1000)

  document.addEventListener("click", function(event){
    if(event.target.id === 'minus'){
      incrementCounter(-1)
    } else if(event.target.id === 'plus'){
      incrementCounter(1)
    } else if (event.target.id === 'heart'){
      let number = counter.innerText
      if(likeCount[number]) { 
        // √if the number has already been liked, render
        // √"2 has been liked x times!"

        likeCount[number]++
        let li = document.querySelector(`li[data-number="${number}"]`) 
        li.innerText = `${number} has been liked ${likeCount[number]} times!`
      } else {
        // √add number to the like count
        // √render a new li for that number

        likeCount[number] = 1
        let li = document.createElement('li')
        li.dataset.number = number
        li.innerText = `${number} has been liked!`
        likeList.append(li)
      }
    } else if (event.target.id === 'pause'){
      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('heart').disabled = true
      document.getElementById('submit').disabled = true

      clearInterval(timer)

      event.target.innerText = 'resume'
      event.target.id = 'resume'
    } else if (event.target.id === 'resume') {
      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
      document.getElementById('heart').disabled = false
      document.getElementById('submit').disabled = false

      timer = setInterval(function(){ incrementCounter(1) }, 1000)

      event.target.innerText = 'pause'
      event.target.id = 'pause'
    } else if (event.target.id === 'submit'){
      event.preventDefault()  
      let form = event.target.parentNode
      let comment = form[0].value
      let p = document.createElement('p')
      p.innerText = comment
      commentList.append(p)
      form.reset()
    }
  })

  function incrementCounter(number){
    let currentNumber = parseInt(counter.innerText)
    newNumber = currentNumber + number 
    counter.innerText = newNumber
  }
})
