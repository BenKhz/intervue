/**
 * 
 * The order of the console logs you provided ("1, 3, 6, 5, 4, 2") is a result of the asynchronous nature of JavaScript, particularly how different asynchronous mechanisms are handled in the event loop. Let's break down the order step by step:
 * console.log('1 - Start of the program'): This is the initial log and appears first in the order.
 * console.log('3 - Inside the promise (before resolving)'): This log is within the Promise constructor, so it's executed as soon as the Promise is created, before the promise is resolved.
 * console.log('6 - Notifying user about order status'): This log is synchronous and appears after the promise creation log, but before the asynchronous operations (Promise resolution and setTimeout) start.
 * console.log('5 - Inside the promise (after resolving):', result): This log is within the .then() callback of the resolved promise. The Promise is resolved before the setTimeout callback is executed, so the .then() callback executes before the setTimeout callback.
 * console.log('4 - Order processed successfully!'): This log is within the resolve callback of the Promise. It's executed when the promise is resolved.
 * console.log('2 - Inside setTimeout'): This log is within the setTimeout callback. Despite the delay being set to 0 milliseconds, the setTimeout callback is still scheduled as a separate asynchronous task and executed after the promise resolution.
 * The key point to understand is that while JavaScript is single-threaded, it has an event loop that manages asynchronous operations. Promises and setTimeout are part of this asynchronous behavior, and their execution order is influenced by how the event loop handles them. This is why you see the order of console logs as "1, 3, 6, 5, 4, 2".
 */

/**
 * Simulates a user making an online purchase.
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
