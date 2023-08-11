/**
* Question 1 
*/
const userAgeInput = '18';
const legalAge = 18;
console.log("Question 1: ", userAgeInput == legalAge);
console.log("Question 1: ", userAgeInput === legalAge); 


/**
* Question 2
*/
const currentCart = [1, 2, 3, 4]; 
const savedCart = [1, 2, 3, 4]; 

console.log("Question 2", currentCart == savedCart); // Prints 
console.log("Question 2", currentCart === savedCart); // Prints 

/**
* Question 3 
*/
let person1 = { eyes: { color: 'blue'}  }
let person2 = person1
person2.eyes.color = 'brown'

console.log(person1.eyes.color, person2.eyes.color) // Prints 


/**
* Question 4
*/
let person3 = { eyes: { color: 'green'}  }
let person4 = person3
person4 = { eyes: {color:'red'} }

console.log(person3.eyes.color, person4.eyes.color) // Prints 