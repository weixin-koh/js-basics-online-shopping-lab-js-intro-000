var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemInfo = {};

 // returns a random integer from 1 to 100
 var price = Math.floor(Math.random() * 100) + 1;

 itemInfo['itemName'] = item;
 itemInfo['itemPrice'] = price;

 cart.push(itemInfo);

 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cartString = "In your cart, you have";

    for (let i = 0; i < cart.length; cart++) {

      if (cart.length > 1) {
        if (i === cart.length - 2) {
          cartString = cartString + ", and";
        } else if (cart.length - i > 2) {
          cartString = cartString + ",";
        }
      }


    }
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
