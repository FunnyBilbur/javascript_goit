"use strict";
// const isComing = confirm("Please confirm hotel reservation");
// //let birtday = prompt("Enter your birthday date:");
// console.group('Hotel Reservation');
// console.log("Is they coming? - " + isComing);
// console.log('%c Dmytrii ',
//             'color: white; background-color: #D33F49',
//     'Tsybuliak');
// //console.log("Age: " + birtday);
// console.groupEnd();
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// function getIntMax(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getIntMax(100));
// console.log("Text:" + parseInt(Math.random() * 100));



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const total = (orderedQuantity * pricePerDroid) + deliveryFee;
//   const message = `You ordered droids worth ${total} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // const message = "You ordered droids worth "+total+"credits. Delivery ("+deliveryFee+ "credits) is included in total price.";
//   // Change code above this line
//   return message;
// }
// function makeOrderMessage1(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const total = (orderedQuantity * pricePerDroid) + deliveryFee;
// //   const message = `You ordered droids worth ${total} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   const message = "You ordered droids worth "+total+" credits. Delivery ("+deliveryFee+ " credits) is included in total price.";
//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 2, 5));
// console.log('test');
// console.log(makeOrderMessage1(2, 2, 5));

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(19));
// console.log(isAdult(13));
// console.log(isAdult(18));
// console.log(isAdult(13));

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   // Change code below this line
//   if(totalPrice>customerCredits){
//     message="Insufficient funds!";
//   }
//   else{
//     message="You ordered " +orderedQuantity+ " droids, you have " +(customerCredits-totalPrice)+ " credits left";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(13, 1, 15));
// console.log(makeTransaction(3000, 5, 23000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered == 0) {
    message = "There are no products in the order!";
  } else if (ordered>available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  // Change code above this line
  return message;
}


console.log(checkStorage(10,15));