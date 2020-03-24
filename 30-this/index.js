console.log("this is so much fun!")

/************ Simple Function Call ***********************/

console.log("global this", this)

// called on its own, this will be the window for sayThis
function sayThis(){
  console.log(`This is: `, this)
}


/************ Bind/Call/Apply ****************************/

let michael = {
  name: "Michael"
}

this.name = "Winslow"

// called on its own, this will be the window for sayName
function sayName(location, time){
  console.log(`My name is: ${this.name} in ${location} at ${time}`)
}

// call and apply immediately invoke the original function
// with the thisArg and parameters passed in
sayName.call(michael, "NYC", "1pm")
sayName.apply(michael, ["NYC", "noon"])

// IIFE (Immediately Invoked Function Expression)
// (function(){
//   console.log("say hi")
// })()

// bind returns a function that wraps the 
//original function and binds the thisArg to it
let boundSayName = sayName.bind(michael) 


/************ Function called on an Object ***************/

let neikko = {
  name: "Neikko",
  speak: function(){
    console.log(`Hi my name is ${this.name}`)
  }
}

neikko.speak() // => this is neikko

let dogMethod = neikko.speak
dogMethod() // => this is the window

/************ Function Called with New Keyword ***********/

class Person {
  constructor(firstName, favColor){
    this.firstName = firstName
    this.favColor = favColor
  }

  sayName(){
    console.log(`My name is ${this.firstName}`)
    console.log(this)
  }
}

// the new keyword sets this as the joe object
// for the constructor function
let joe = new Person("Joe", "blue")


/************ Arrow Functions ****************************/

// arrow function doesn't have its own this
// gets this from its parent context
let perky = {
  name: "Perky",
  speak: () => {
    console.log(`Hi my name is ${this.name}`)
  }
}

// the given dog instance gets bound to this in the arrow function
class Dog{
  constructor(firstName){
    this.firstName = firstName
  }

  speak = () => {
  console.log(`Hi my name is ${this.firstName}`)
  }
}
























