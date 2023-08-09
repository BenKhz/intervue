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

// Check if the user qualifies for a special discount based on their cart total
checkCartTotal();