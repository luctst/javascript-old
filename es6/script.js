// Const
const age = 22
console.log(age) // 22
age = 25
console.log(age) // Error !!!

// Let
let nom = 'lucas'
console.log(nom) // lucas
nom = 'thomas'
console.log(nom) // thomas

// let and const block
function driverlicence(passed) {
  if(passed) {
    let name = 'lucas' // let and const create a block scop
    const age = 1995
    return '${name} can now drive, he was born in ${age}' // lucas can now drive, he was born in 1995
  }
  return '${name} can now drive, he\'s was born in ${age}' // Error !!!!
}

let i = 23

for(let i = 0; i < 5; i++) {
  console.log(i) // 0,1,2,3,4
}

console.log(i); // 23
// IIFe es5
(function(){
  var c = 3
  return c // 3
})
console.log(c) // Error !!!

// IIFE es6
{
  let a = 1
  const b = 2
  console.log(`${a} ${b}`) // 1 2
}
  console.log(`${a} ${b}`) // Error !!!!
  // variables
  let name = 'lucas'
  let surname = 'tostée'
  const yearOfBirth = 1995
  function calculateAge(year) {
    return 2018 - year
  }

  // es5
  console.log(name+ +surname+' a '+calculateAge(yearOfBirth)+'ans.') // lucas tostée à 22ans

  // es6
  console.log(`${name} ${surname} a ${calculateAge(yearOfBirth)}ans.`) // lucas tostée à 22ans.
  // Variable
  const years = 1995
  const name2 = 'lucas'
  let ages6

  // Es5
  var ages = function(yearOfBirth) {
    return 2018 - yearOfBirth
  }
  ages(1995) // 22

  // Es6
  ages6 = yearOfBirth => 2018 - yearOfBirth // One line syntax
  ages6(years) // 22

  ages6 = (yearOfBirth,name) => `${name} was born in ${yearOfBirth}` // Two or more parameters syntax
  ages6(years,name) // lucas was born in 1995

  ages6 = (name,yearOfBirth) => { // Many lines syntax
    const now = new Date().getFullYear() // 2018
    const age = now - yearOfBirth // 22;
    return `${name} was born in ${yearOfBirth} and he's ${age}` // lucas was born in 1995 and he's 22.
  }
// Es5
  var box5 =  {
    color: 'green',
    position: 1,
    lexicalThis: function() {
      var self = this // Solution to access property with this
      console.log(this.color) // green
      return function () {
        return this.position // Undefined !!!
        return self.position // 1
      }
    }
  }

  // Es6
  const box6 =  {
    color: 'yellow',
    position: 2,
    lexicalThis: function() {
      return this.color; // yellow
      () => this.position // 2 !!!
    }
  }

// Es5
var perso = ['lucas',22]
var name3 = perso[0] // lucas
var age2 = perso[1] // 22

var obj = {
  name: 'levy',
  surname: 'levis'
}
var nameObj = obj.name // levy
var surnameObj = obj.surname // levis

// Es6
const [name6, age6] = ['mark',25]
console.log(name6) // mark
console.log(age6) // 25

const obj6 = {
  firstName: 'john',
  secondName: 'trulol'
}
const {firstName, secondName} = obj6
console.log(firstName) // john
console.log(secondName) // trulol

const {firstName: a, secondName: b} = obj6
console.log(a) // john
console.log(b) // trulol
