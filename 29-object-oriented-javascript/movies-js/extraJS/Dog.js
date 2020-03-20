// make some dogs

// const gucci = {
//   name: "Gucci",
//   age: 1,
//   breed: "French Bulldog",
//   speak: function(){
//     console.log(`Hi, my name is ${this.name}! Woof or whatever 🐩`)
//   }
// }

// const bear = {
//   name: "Bear",
//   age: 5,
//   breed: "German Shepherd",
//   speak: function(){
//     console.log(`Hi, my name is ${this.name}! Woof or whatever 🐩`)

//   }
// }

class Dog extends Animal {
  constructor(name, breed, age, lastName){
    super(name, age)
    this.breed = breed
    this.lastName = lastName
  }

  get fullName(){
    return `${this.name} ${this.lastName}`
  }
  
  speak(){
    console.log(`Hi, my name is ${this.name}! Woof or whatever 🐩`)
  }

  static eat(){
    console.log("Eating!")
  }
}

const gucci = new Dog('Gucci', 'Frenchie', 1, "Eddie's Mom")
const bear = new Dog('Bear', 'German Shepherd', 5, "Something")
