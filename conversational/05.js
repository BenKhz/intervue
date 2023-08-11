/**
 * Question 1
 */
async function fetchCartTotalFromServer() {
  const cartTotal = 200;
  return cartTotal;
}

async function checkCartTotal() {
  const cartTotal = fetchCartTotalFromServer();

  if (200 == cartTotal) {
    console.log('You get a special discount!');
  } else {
    console.log('Sorry, no special discount for you.');
  }
}

checkCartTotal(); // Prints...