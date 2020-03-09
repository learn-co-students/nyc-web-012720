console.log("locked and loaded")

// FUNCTIONS

// function sayFullName(firstName, lastName){
//   console.log(`My full name is ${firstName} ${lastName}`)
// }

// let saySteven = function(){
//   return 'My name is Steven.'
// }

// let sayHello = () => "Hello world" 

// let sayFullNameAgain = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// SCOPE

// 1. Global

//  let name = 'Steven' // <= global scope

//  // 2. Function

//  function sayName(){
//    function keanu(){
//      console.log('name', "whoa")
//    }
//    keanu()

//    let lastName = 'Doran' // <= function scope
//    return name
//  }

// //  keanu()

// // 3. Block 

// if(true){
//   let color = 'blue'
// }

// console.log(color)

// global, function, and block scope

// Global Scope


// HOISTING

// function declared with `function` keyword and variables declard with `var` are hoisted

// variables

// dog = 'Amber'

// console.log("dog name", dog)

// let dog


//functions

bark()

function bark() {
  console.log('woof')
}



// var VS. let VS. const


//var
// * can be reassigned and redeclared

var cow = 'beef'
var cow = 'veal' // => redeclare
cow = 'steak' // => reassign

//let
// * allows reassignment but not redeclaration

let pig = "pork"
// let pig = "beef" => cannot redeclare
pig = "pork chop"

//const
// * allows neither reassignment nor redclaration
const chicken = "drumstick"
// const chicken = "wing" => cannot redeclare
// chicken = 'wing' => cannot reassign

const neikko = {
  name: "Neikko",
  breed: "mostly rat?"
}

// First Class Functions
/*
  * functions can have properties
  * functions can be passed as  argument to other functions => callback
  * functions can be returns by another function => higher order functions
  * functions can be assigned to a variable

*/

function multiplier(x){
  return function(y){
    debugger
    return x * y
  }
}

let doubler = multiplier(2)

// Closures




// IIFE
// Immediately Invoked Anonymous Function

// (function(){ console.log("Steven is cool") })()