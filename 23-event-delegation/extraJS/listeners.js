// 

// √get the node, image
// √add a click listener to that node
// √change the src property of the img

const welcome = document.querySelector('img')

welcome.addEventListener('click', function(event){
  let image = event.target
  console.log(image)

  image.src = "https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg"
})

// add a listener to the welcome image that will give the image a 
// turquoise border when the mouse hovers over it, and the border 
// will disappear when the mouse isn't over it

welcome.addEventListener('mouseover', function(event){
  let image = event.target
  
  image.style.border = '5px solid turquoise'
})

welcome.addEventListener('mouseout', function(event){
  let image = event.target
  
  image.style.border = ''
})