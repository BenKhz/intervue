// Simulating user input for age
const userAgeInput = '18';
const legalAge = 18;

console.log(userAgeInput == legalAge);
console.log(userAgeInput === legalAge); 

// Simulating a user's current and saved shopping carts
const currentCart = [1, 2, 3, 4];
const savedCart = [1, 2, 3, 4];

// Check if the current cart matches the saved cart
console.log(currentCart == savedCart);
console.log(currentCart === savedCart);


const userProfile1 = { name: 'Alice', age: 25 };
const userProfile2 = { name: 'Alice', age: 25 };

console.log(userProfile1 == userProfile2);
console.log(userProfile1 === userProfile2);



let person1 = { eyes: { color: 'blue'}  }
let person2 = person1

person2.eyes.color = 'brown'

console.log(person1, person2)

let person3 = { eyes: { color: 'green'}  }
let person4 = person3

person4 = { eyes: {color:'red'} }

console.log(person3, person4)