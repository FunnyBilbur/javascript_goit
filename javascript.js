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


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered == 0) {
//     message = "There are no products in the order!";
//   } else if (ordered>available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }


// console.log(checkStorage(10,15));

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(500000));
// console.log(getDiscount(5000));

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));


// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) { // Change this line
//     case "starter":  // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional":  // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;

//     default:
//       price = 100;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice('dsjd'));
// console.log(getSubscriptionPrice('starter'));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = "Shipping to " + country + " will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to " + country + " will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to " + country + " will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to " + country + " will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chi1na"));
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("China"));

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("China"));
// console.log(getNameLength("Macaronist"));

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log("The word is:" + courseTopic);
// console.log("Length is " + courseTopicLength);
// console.log("First symbol is " + firstElement);
// console.log("Last symbol is " + lastElement);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 9));


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this lin
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   } else {
//     result = message;
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Curabitur ligulA sSaien"));

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Ts Dmytrii", "Dmytrii"));
// console.log(checkForName("Ts Dmytrii", "Dytrii"));


// Функция checkForSpam(message) принимает строку(параметр message),
//   проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки.
//   Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово(spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.


// function checkForSpam(message) {
//   let result;
// Change code below this line
//   if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") || message.toUpperCase().includes("spam") || message.toUpperCase().includes("sale")) {

//     result = true;
//   } else {
//     result = false;
//   }

//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("S1aleerrs"));

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// console.log(checkStorage(10, 145));
// console.log(checkStorage(1011, 145));
// console.log(checkStorage(10, 0));

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);
// console.log("Second product is " + fruits[1]);
// console.log("The length is " + fruits.length);

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);
// // Write your code under this line

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// // Change code below this line

// console.log("Fruits: " + fruits);
// console.log("Index: " + lastElementIndex);
// console.log("Last Element: " + lastElement);


// function getExtremeElements(array) {
//   // Change code below this line
//   let a = array[0];
//   let lengthA = array.length - 1;
//   let b = array[lengthA];
//   let result = [a, b];
//   return result;

//   // Change code above this line
// }



// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// console.log(getExtremeElements([1, 2, 2, 3, 4, 5, 6]));

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("My Name is Dmytrii", " "));


// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let totalPrice;
//   let Temp = message.split(" ");
//   totalPrice = Temp.length * pricePerWord;
//   return totalPrice;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("My Name is Dmytrii", 10));


// function slugify(title) {
//   // Change code below this line
//   let result;
//   let splitstring;
//   splitstring = title.split(" ");
//   result = splitstring.join("-").toLowerCase();


//   return result;
//   // Change code above this line
// }

// console.log(slugify("My Name is Dmytrii"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const result = firstArray.concat(secondArray);
//   return result.slice(0, maxLength);
//   // Change code above this line
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// function calculateTotal(number) {
//   // Change code below this line
//   let result = 0;
//   for (let i = 1; i <= number; i += 1) {
//     result = result + i;
//   }
//   return result;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(4));
// console.log(calculateTotal(2));
// console.log(calculateTotal(10));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total = order[i] + total;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice(15, 10));


// function findLongestWord(string) {
//   // Change code below this line
//   let biggest = 0;
//   let result;
//   let arrayM = string.split(" ");
//   for (let i = 0; i < arrayM.length; i += 1) {
//     if (arrayM[i].length > biggest) {
//       biggest = arrayM[i].length;
//       result = arrayM[i];
//     }
//   }
//   return result;

//   // Change code above this line
// }

// console.log(findLongestWord("My biggest work"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i < max + 1; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(5, 8));


// function filterArray(numbers, value) {
//   // Change code below this line

//   const final_numbers = [];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       final_numbers.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//   return final_numbers;

//   // Change code above this line
// }
// console.log(filterArray([1, 6, 3, 4, 5, 1], 3));


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("plu2m"));


// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let result = [];
//   for (let j = 0; j < array1.length; j += 1) {
//     if (array2.includes(array1[j])) {
//       result.push(array1[j]);
//     }
//   }
//   return result;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3, 4, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }
// 11
// 21
// 31

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i of order) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([15, 10, 25]));

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }


// }
// console.log(number);

// суть ретурна в том, что если хоть один раз условия выполнится, то чтобы прервать условие и цикл - необходимо
// использовать ретурн
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }
// console.log(findNumber(16, 35, 7));


// function includes(array, value) {
//   // Change code below this line
//   let orr;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       orr = true;
//       return orr;
//     }
//     else {
//       orr = false;
//     }
//   }
//   return orr;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 4));



// Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:
// imgUrl - фотография, значение "https://via.placeholder.com/640x480";
// descr - описание, значение "Spacious apartment in the city center";
// rating - рейтинг, значение 4;
// price - цена, значение 2153;
// tags - метаинформация, массив["premium", "promoted", "top"].

// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",

//     }
// };

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(apartment.rating);


// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//     ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

// Change code below this line
const ownerName = apartment;
const ownerPhone = apartment;
const ownerEmail = apartment;
const numberOfTags = apartment;
const firstTag = apartment;
const lastTag = apartment;
// Change code above this line
