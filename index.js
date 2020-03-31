var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // returns a random integer from 1 to 100
 var price = Math.floor(Math.random() * 100) + 1;

 cart.push({itemName: item, itemPrice: price});

 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cartString = "In your cart, you have";

    for (let i = 0; i < cart.length; cart++) {
      if (cart.length > 1) {
        if (cart.length - i > 1) {
          cartString = cartString + ", ";
        }

        if (i === cart.length - 1) {
          cartString = cartString + "and ";
        }
      }

      cartString = cartString + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    }

    cartString = cartString + ".";

    return cartString;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
