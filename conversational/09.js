/**
 * Question 1, 
 * What order will the console logs print?
 */

console.log('1 - User initiates online purchase');

// Simulate a payment process using setTimeout
setTimeout(() => {
  console.log('2 - Payment processing...');
}, 0);

// Simulate processing of the order using a Promise
const orderProcessing = new Promise((resolve, reject) => {
  console.log('3 - Order processing');
  resolve('4 - Order processed successfully!');
});

orderProcessing.then((result) => {
  console.log('5 - Order processing complete:\n', result);
});

// Simulate notifying the user about the order
console.log('6 - Notifying user about order status');
