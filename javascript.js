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
//     },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];
// // Change code above this line

// console.log("Tags: " + apartment.tags);
// console.log("firstTag: " + firstTag);
// console.log("lastTag: " + lastTag);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

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
//     },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.log(apartment.area);
// console.log(apartment.location.country);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",


//     // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);
// console.log(credentials.emailInputName); //undefined - since not declared/initialized


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
// }

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line


//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }

//     // Change code above this line
// }
// console.log(keys);
// console.log(values);
// console.log(advert);

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount++;
//         }
//     }
//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const book = {
//     title: "The Last Kingdom",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

// console.log(apartment);
// console.log(keys);
// console.log(values);

// function countProps(object) {
//     // Change code below this line
//     let propCount = Object.keys(object).length;

//     return propCount;
//     // Change code above this line
// }

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     let con = Object.keys(object);
//     for (const key of con) {
//         propCount += 1;
//     }

//     return propCount;
//     // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     let salary = Object.values(salaries);

//     console.log(salary);
//     for (const key of salary) {
//         totalSalary = totalSalary + key;
//     }
//     // Change code above this line
//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const key of colors) {
//     hexColors.push(key.hex);
//     rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     let product_price = null;
//     for (const key of products) {
//         if (key.name === productName) {
//             product_price = key.price;
//         }
//     }
//     // Change code above this line
//     return product_price;
// }
// console.log(getProductPrice("Droid"));


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let result = [];
//     for (const key of products) {
//         if ("name" === propName) {
//             result.push(key.name);
//         } else if ("price" === propName) {
//             result.push(key.price);
//         } else if ("quantity" === propName) {
//             result.push(key.quantity);
//         }
//     }
//     return result;
//     // Change code above this line
// }

// console.log(getAllPropValues("name"));

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const key of products) {
//         if (productName === key.name) {
//             totalPrice = key.price * key.quantity;
//         }
//     }
//     return totalPrice;
//     // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// Change code below this line
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log("Best Score:" + bestScore + ". Worst Score:" + worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log("Best Score:" + bestScore + ". Worst Score:" + worstScore);


// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // {propC: 50, propD: 20,  propA: 5, propB: 10  }


// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }


// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);


// function makeTask(data) {
//     const completed = false;
//     // Change code below this line
//     let finalResult = {};
//     const { category = "General", priority = "Normal", text } = data;

//     if (text === undefined) {
//         finalResult = { category, priority, completed };
//     }
//     else {
//         finalResult = { category, priority, text, completed };
//     }
//     // Change code above this line
//     return finalResult;
// }
// console.log(makeTask({}));
// console.log(makeTask({ text: "Buy bread" }));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// function multiply(...args) {
//     console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// Change code below this line
// function add(...args) {
//     let total = 0;
//     for (const key of args) {
//         total = key + total;
//     }
//     return total;
//     // Change code above this line
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

// // Change code below this line
// function addOverNum(...args) {
//     let total = 0;
//     let first = args[0];
//     for (const arg of args) {
//         if (arg > first) {
//             total += arg;
//         }

//     }
//     return total;
//     // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//     for (let key of args) {
//         for (let key2 of arr) {
//             if (key === key2) {
//                 matches.push(key);
//             }
//         }
//     }

//     // Change code above this line
//     return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//     books: ["Последнее королевство", "Страж снов"],
//     // Это метод объекта
//     getBooks() {
//         console.log("Этот метод будет возвращать все книги - свойство books");
//     },
//     // Это метод объекта
//     addBook(bookName) {
//         console.log("Этот метод будет добавлять новую книгу в свойство books");
//     },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`;
//     }
//     // Change code above this line
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         let switcher = this.books.indexOf(oldName);
//         this.books.splice(switcher, 1, newName);

//         console.log(this.books);
//         // Change code above this line
//     },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);


//         // Change code above this line
//     },
//     getPotions() {
//         return this.potions;
//     },
//     removePotion(potionName) {
//         // Change code below this line
//         let key = this.potions.indexOf(potionName);
//         return this.potions.splice(key, 1);


//         // Change code above this line
//     },
//     updatePotionName(oldName, newName) {
//         // Change code below this line
//         let switcher = this.potions.indexOf(oldName);
//         this.potions.splice(switcher, 1, newName);

//         // Change code above this line
//     },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());


// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const key of this.potions) {
//             if (key.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         let potionIndex = 0;
//         let potion_in = false;
//         for (const key of this.potions) {
//             if (key.name === potionName) {
//                 this.potions.splice(potionIndex, 1);
//                 potion_in = true;
//             }
//             potionIndex = potionIndex + 1;
//         }
//         if (potion_in == false) {
//             return `Potion ${potionName} is not in inventory!`;
//         }
//     },
//     updatePotionName(oldName, newName) {
//         let potionIndex = 0;
//         let potion_in = false;
//         for (const key of this.potions) {
//             if (key.name === oldName) {
//                 // this.potions.splice(potionIndex, 1, newName);
//                 key.name = newName;
//                 // console.log("The name is " + key.name + ". Index:" + potionIndex);
//                 potion_in = true;
//             }
//             potionIndex = potionIndex + 1;
//         }
//         if (potion_in == false) {
//             return console.log(`Potion ${oldName} is not in inventory!`);
//         }

//     },
//     // Change code above this line
// };



// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// // console.log(atTheOldToad.addPotion({ name: 'Speed potion', price: 240 }));
// // console.log(atTheOldToad.getPotions());

// // console.log(atTheOldToad.addPotion("Invisibility"));
// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.removePotion("Dragon breath"));
// // console.log(atTheOldToad.getPotions());
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());

// function greet(name) {
//     return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet
// // и выводим результат в консоль
// console.log(greet("Mango"));
// // Добро пожаловать Mango.

// // Выводим функцию greet
// // в консоль не вызывая её
// console.log(greet);
// /*
// ƒ greet() {
//      return `Добро пожаловать ${name}.`;
// }
// */

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

// Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest("Mango", greet);
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));


// Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }


// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// function processCall(recipient, onAvailable, onNotAvailable) {
//     // Имитируем доступеность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     }

//     onAvailable(recipient);
// }

// function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return console.log(onSuccess(pizzaName));
//         }
//         return console.log(onError(pizzaName));
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //     console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`);
// });

// console.log("_________________________");
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // пример, если бы использовали обычный for
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     // пример, если бы использовали foreach
//     orderedItems.forEach(function (totalItems) {
//         totalPrice += totalItems;
//     })
//     // Change code above this line
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function (i) {
//         if (i > value) {
//             filteredNumbers.push(i);
//         }
//     });
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }
//     // Change code above this line
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function (i) {
//         if (secondArray.includes(i)) {
//             commonElements.push(i);
//         }
//     });
//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }

//     return commonElements;
//     // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const greet = () => {
//     console.log("Привет!");
// };
// greet();

// const greet2 = (i) => {
//     console.log(`Привет ${i}`);
// };
// greet2("Dima");

// // function calculateTotalPrice(quantity, pricePerItem) {
// //     // Change code above this line
// //     return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

// const add = (a, b, c) => a + b + c;
// console.log(add(2, 3, 5));

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 100));

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// Change code below this line
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;


//     // orderedItems.forEach(function (item) {
//     //     totalPrice += item;
//     // });
//     return totalPrice;
// }
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;


//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//     return totalPrice;
// }

// // Change code above this line
// console.log("Should be 138: " + calculateTotalPrice([12, 85, 37, 4]));

// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function changeEven(numbers, value) {
//     // Change code below this line
//     const result = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             // numbers[i] = numbers[i] ;
//             result.push(numbers[i] + value);
//         } else {
//             result.push(numbers[i]);
//         }
//     }
//     return result;
//     // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(Plength => Plength.length);


// console.log(planetsLengths);
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(bookname => bookname.title);
// console.log(titles);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line

// const genres = books.flatMap(genress => genress.genres);
// console.log(genres);

// [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
// ];
// // Change code below this line
// const getUserNames = users => {

//     return users.map(key => key.name)

// };
//   // Change code above this line

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(even => even % 2 == 0);
// const oddNumbers = numbers.filter(even => even % 2 !== 0);

// console.log(numbers);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const students = [
//     { name: "Mango", courses: ["mathematics", "physics"] },
//     { name: "Poly", courses: ["science", "mathematics"] },
//     { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
// );

// console.log(allCourses.indexOf("science"));
// console.log(uniqueCourses);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genr, index_genr, books_array) =>
//     books_array.indexOf(genr) === index_genr);

// console.log(allGenres);
// console.log(uniqueGenres);


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Mango и Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Ajax

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Poly и Houston
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(books);

// console.log(topRatedBooks);
// console.log(booksByAuthor);
// Change code below this line

// console.log({
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
// });
// Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//     const eyeColorArray = [];
//     eyeColorArray.push(...users.filter(user => (user.eyeColor === color)));

//     return eyeColorArray;
// };


// Change code below this line
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter(user => user.age >= minAge && user.age <= maxAge);
// // Change code above this line



// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     const userlist = [];

//     userlist.push(...users.filter(user => user.friends.includes(friendName)));
//     return userlist;
// };
// // Change code above this line

// console.log(getUsersWithFriend(usep, "Sharron Pace"));
// console.log(getUsersWithFriend(usep, "Briana Decker"));

// const usep = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// // Change code below this line
// const getFriends = (users) => {
//     const AllFriends = users.flatMap(users => users.friends);
//     const UniqueFriends = AllFriends.filter((frie, index_frie, friends_array) =>
//         friends_array.indexOf(frie) === index_frie);
//     return UniqueFriends;
// };
// // Change code above this line
// // const allCourses = students.flatMap(student => student.courses);
// // // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

// // const uniqueCourses = allCourses.filter(
// //     (course, index, array) => array.indexOf(course) === index
// // );

// console.log(getFriends(usep)); 

// const usep = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// const getActiveUsers = (users) => {
//     // user.isActive по умолчанию возвращает true. Тоже самое, что и user.isActive == true
//     const ActiveUser = users.filter(user => user.isActive);
//     return ActiveUser;
// };
// console.log(getActiveUsers(usep)); 


// const usep = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// // Change code below this line
// const getInactiveUsers = (users) => {
//     const ActiveUser = users.filter(user => user.isActive == false);
//     return ActiveUser;
// };

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title == BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author == AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const usep = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ];

// // Change code below this line
// const getUserWithEmail = (users, email) => {

//     const GetObg = users.find(user => user.email == email);
//     return GetObg;
// };
// // Change code above this line
// console.log(getUserWithEmail(usep, "moorehensley@indexia.com"));


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 == 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 != 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 == 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 != 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 == 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 != 0);


const usep = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
];

// // Change code below this line
// const isEveryUserActive = (users) => {
//     return users.every(person => person.isActive);
// };
// // Change code above this line

// console.log(isEveryUserActive(usep));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 == 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 != 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 == 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 != 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 == 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 != 0);


// const isAnyUserActive = (users) => {
//     return users.some(person => person.isActive);
// };
// console.log(isAnyUserActive(usep));

// # Вначале метод reduce() создаёт внутреннюю переменную - аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
//     previousValue = 0

// # Далее коллбек - функция вызывается для каждого элемента массива.Текущее значение
// # параметра previousValue это то, что вернула коллбек - функция на прошлой итерации.
//     Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
//     Результат - 32
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// console.log(total); // 32

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((count, players) => { return count + players });

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log("totalPlayTime: " + totalPlayTime + " hours. averagePlayTime:" + averagePlayTime + " hours");

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//     return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;


// console.log("TotalScore: " + totalScore + ". AverageScore:" + averageScore.toFixed(0) + "(" + averageScore + ").");


// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((previous, player) => {
//     const average = player.playtime / player.gamesPlayed;
//     const result = previous + average;
//     return result;
// }, 0);

// console.log(totalAveragePlaytimePerGame);


// Change code below this line
// const calculateTotalBalance = users => users.reduce((previous, user) => {
//     return user.balance + previous;
// }, 0);
// // Change code above this line
// console.log(calculateTotalBalance(usep));

// const getTotalFriendCount = users => {
//     return users.reduce(
//         (total, user) => total + user.friends.length, 0
//     );
// };
// // Change code above this line
// console.log(getTotalFriendCount(usep));


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);
// console.log(ascendingReleaseDates);



// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authors);
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// console.log(books);
// console.log("____________");
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// Change code below this line
// const sortByAscendingBalance = [...users]
//     .sort((a, b) => a.balance - b.balance)
//     .map(userN => userN.name);
// Change code above this line


// const USERSS = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// const sortByAscendingBalance = users => {
//     const sort = [...users].sort((a, b) => a.balance - b.balance)
//     return sort.map(userN => userN);
// };
// console.log(sortByAscendingBalance(USERSS));

// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) => b.friends.length - a.friends.length)
// };

// console.log(sortByDescendingFriendCount(USERSS));


// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// console.log(sortByName(USERSS));

// var string1 = "cd";
// var string2 = "ab";
// var n = string1.localeCompare(string2); // 1, string1 сортируется после string2
// console.log("Result: " + n);


// const names = [...students]
//     .sort((a, b) => a.score - b.score)
//     .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//     .filter(user => user.rating > MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .map(user => user.author);

// console.log(names);

const MASS = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]
// Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((a, b) => a.friends.length - b.friends.length)
//         .map(user => user.name);

// };
// // Change code above this line

// console.log(getNamesSortedByFriendCount(MASS));

// Change code below this line
// const getSortedFriends = users => {
//     return [...users]
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b));
// };
// // Change code above this line
// console.log(getSortedFriends(MASS));

// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//         .filter(user => user.gender === gender)
//         .reduce((total, count) => total + count.balance, 0)

// };
// // Change code above this line
// console.log(getTotalBalanceByGender(MASS, "male"));
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Smdddddoked"));

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

// console.log(historyService.getOrdersLog());


// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child.name + "   :::   " + child.surname);
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line


// class Car {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//         console.log("Car:" + name + " Price:" + price);
//     }
// }
// const result = new Car("Porshe", "250000$");
// console.log(result);

// class Car {
//     // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code above this line
// }
// const Porshe = new Car("Porshe", "Cayenne Coupe GTS", "5 292 000$");
// console.log(Porshe);

// class Car {
//     // Change code below this line
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code above this line
// }

// const Porshe = new Car({
//     brand: "Porshe",
//     model: "Cayenne Coupe GTS",
//     price: "5 292 000$",
// });
// console.log(Porshe);


// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     // Change code below this line
//     getPrice() {
//         return this.price;
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     // Change code above this line
// }

// const Porshe = new Car({
//     brand: "Porshe",
//     model: "Cayenne Coupe GTS",
//     price: "5 292 000$",
// });
// console.log(Porshe);
// console.log("Method getPrice(): " + Porshe.getPrice)
// Porshe.changePrice("6 292 000$")
// console.log(Porshe);

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         for (const array of this.items) {
//             if (array == itemToRemove) {
//                 this.items.splice(this.items.indexOf(array), 1)
//             }
//         }
//     }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//     constructor(value) {
//         this.value = value;
//     }

//     getValue() {
//         return this.value;
//     }
//     padEnd(str) {
//         return this.value = this.value + str;
//     }
//     padStart(str) {
//         return this.value = str + this.value;
//     }
//     padBoth(str) {
//         return this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class User {
//     // Необязательное объявление публичных свойств
//     name;
//     // Обязательное объявление приватных свойств
//     #email;

//     constructor({ name, email }) {
//         this.name = name;
//         this.#email = email;
//     }

//     getEmail() {
//         return this.#email;
//     }

//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new User({
//     name: "Mango",
//     email: "mango@mail.com",
// });
// console.log("Before: " + mango.getEmail());
// mango.changeEmail("mango@supermail.com");
// console.log("After: " + mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Будет ошибка, это приватное свойство
// console.log("Homework:");

// class Car {
//     // Change code below this line
//     #brand;
//     model;
//     price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getBrand() {
//         return this.#brand;
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//     // Change code above this line
// }
// class Storage {
//     // Change code below this line
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]




// class StringBuilder {
//     // Change code below this line
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }

//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
//     // Change code above this line
// }

// const A = new Car({ brand: "Audi", model: "S9 series", price: "$134,100" });
// console.log("Hi. You picked " + A.brand + " " + A.model + " car. The price of this car starts with: " + A.price);
// A.brand = "BMW";
// A.model = "M8 Competition Coupe";
// console.log("______");
// console.log("You picked " + A.brand + " " + A.model + " car. The price of this car starts with: " + A.price);

// class User {
//     // Объявление и инициализация статического свойства
//     static Roles = {
//         ADMIN: "admin",
//         EDITOR: "editor",
//     };

//     #email;
//     #role;

//     constructor({ email, role }) {
//         this.#email = email;
//         this.#role = role;
//     }

//     get role() {
//         return this.#role;
//     }

//     set role(newRole) {
//         this.#role = newRole;
//     }
// }

// const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"
// mango.role = User.Roles.ADMIN;
// console.log(mango.role); // "admin"


// class Car {
//     // Change code below this line
//     #price;
//     static MAX_PRICE = 50000;
//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice > Car.MAX_PRICE) {
//             return 0;
//         } else {

//             this.#price = newPrice;
//         }
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// class User {
//     static #takenEmails = [];

//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }

//     #email;

//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }
// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice(price) {
//         if (Car.#MAX_PRICE > price) {
//             return "Success! Price is within acceptable limits";
//         }
//         else { return "Error! Price exceeds the maximum" }
//     }
//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line
// class Admin extends User {
//     static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };

// }

// console.log(Admin.AccessLevel.BASIC);




// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line
//     accessLevel;
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor(email, NewAccessLevel) {
//         super(email);
//         this.AccessLevel = NewAccessLevel;
//     }
//     get accessLevel() {
//         return this.AccessLevel;
//     }

//     set accessLevel(NewAccessLevel) {
//         this.AccessLevel = NewAccessLevel;
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.AccessLevel); // "superuser"
// console.log(mango.access); 

// const showTag = function () {
//     console.log("Function -> This ", this);
//     console.log("Function -> This ", this.tag);
// }


// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// user.Summa = "2";
// console.log("User -> ", user);
// console.log("----");
// user.showUserTag();

// console.log("________");
// user.showUserTag();
// console.log(user.Summa);


// const xyz = user.showUserTag;

// console.log(xyz);

// const Girl = {
//     Name: 'Anna',
//     showName() {
//         console.log("My lovely girlfriend:", this);
//         console.log("My lovely girlfriend:", this.Name);
//     }
// }

// Girl.showName();


// const foo = function () {
//     console.log('Text is', this);
// }
// foo();

// function Mak(name) {
//     console.log("Hello " + name);
// }

// Mak('Dmytrii');

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log("Function -> This ", this);
//         console.log("Function -> This ", this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// const user2 = {
//     tag: 'Anna',
//     outerShowTag,
// }
// user2.outerShowTag();

// const invokeAction = function (action) {
//     console.log(action);
//     action();
// }

// invokeAction(user.showTag);

// const ShowEditorTool = function () {
//     console.log('Showing:', this);
// }

// ShowEditorTool();

// const ObjList = {
//     a1: 'add',
//     a2: 'edit',
//     a3: 'delete',
// };
// Object.values(ObjList).forEach(val => {
//     console.log(val);
// });
// console.log('/////');
// Object.keys(ObjList).forEach(key => {
//     console.log(ObjList[key]);
// });

// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const DecBtn = document.querySelector('.js-decrement');
// const IncBtn = document.querySelector('.js-increment');
// const ValueEl = document.querySelector('.js-value');


// console.log(DecBtn);

// DecBtn.addEventListener('click', function () {
//     console.log('Decrement');
//     counter.decrement();
//     console.log(counter);
//     ValueEl.textContent = counter.value;
// });

// IncBtn.addEventListener('click', function () {
//     console.log('Increment');
//     counter.increment();
//     console.log(counter);
//     ValueEl.textContent = counter.value;
// })


// function Company(name) {
//     this.name = name;
//     Company.prototype.GetInt = function () {
//         return 'GetInt method';
//     }
// };
// Company.prototype.getName = function getName() {
//     // this по-прежнему зависит от контекста, в котором вызывается
//     return this.name;
// }

// // Company.prototype.GetText = function () {
// //     return this.name;
// // }

// const company = new Company('Hexlet');

// // // Свойство доступно!
// console.log(company.getName()); // => Hexlet


// const company2 = new Company('Mario');
// // Свойство доступно!
// company2.GetText = function () {
//     return 'Minions';
// }

// company2.GetInt = function () {
//     return '2nd GetInt method';
// }
// console.log(company2.GetText());

// console.log(company.GetInt());

// console.log(company2.GetInt());

// const A = {
//     z: 5,
// }

// console.log(A);
// console.log(A.hasOwnProperty('z'));


// const ObjY = Object.create({ z: 5 });
// ObjY.x = 100;

// console.log('ObjY::: ', ObjY);
// console.log(ObjY.x + ' & ' + ObjY.z + ' & ' + ObjY.a);

// const dino = {
//     legs: 2,
// };
// const animal = {
//     legs: 4,

// };

// const dog = Object.create(animal);
// dog.name = "Oddi";
// dog.color = 'Brown';

// const cat = Object.create(dog);
// cat.name = 'Kissa'

// // const bird = Object.create({ wings: 2, color: 'red' });

// const bird = {
//     wings: 2, color: 'red',
// };

// const MyBird = Object.create(bird);
// MyBird.name = 'Kesha';

// console.log('MyBird:', MyBird);
// console.log('Bird name:', MyBird.name, 'Wings: ', MyBird.wings);


// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(cat); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(cat)); // true
// console.log(animal.isPrototypeOf(dog)); // true

// console.log('Cats name is:', cat.name);
// console.log(cat); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dino)); // false

// const Car = function ({ brand, model, price } = { brand: 'Fiat', model: 'Untitled', price: 'price not established' }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.ShowCar = function () {
//     console.log(this);
//     console.log('The car is ' + this.brand + ' ' + this.model + ' (' + this.price + '$).');

// }
// Car.prototype.changePrice_ = function (newPrice) {
//     this.price = newPrice;
// }

// Car.prototype.addYear = function (year) {
//     this.year = year;
// }

// Car.Price = 10000;
// Car.CalculateDifferance = function (objA, objB) {
//     return objA - objB;
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
// myCar.ShowCar();
// console.log(' ');
// myCar.changePrice_(500);
// myCar.addYear(2019);
// // myCar.ShowCar();
// // console.log(' ');
// console.log('Standart price is', Car.Price);
// console.log(Car.CalculateDifferance(100, 11));

// console.dir(Car);
// const Mu2 = new Car();
// Mu2.ShowCar();

// const HannaCar = new Car();
// HannaCar.ShowCar();

// console.log('MyCar.brand has own property?', myCar.hasOwnProperty('model'));
// const AnnCar = new Car();
// console.log(AnnCar);

// const My2ndCar = new Car({ brand: 'Audi', model: 'Q8', price: 66000 });
// console.log(My2ndCar);


// AnnCar.changePrice(5000);
// console.log(AnnCar);

// My2ndCar.changePrice(70000);
// console.log(My2ndCar);

// const Toy = function ({ brand, model, price } = { brand: 'un', model: 'XXX', price: '22' }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// const myToy = new Toy();
// const myToy2 = Toy;
// const myToy3 = new Toy({ brand: 'BMW', price: '23000$' });
// const myToy4 = new Toy();

// console.log('myToy: ', myToy);
// console.log('myToy2: ', myToy2);
// console.log('myToy3: ', myToy3);
// console.log('myToy4: ', myToy4);


const Cars = function ({ name: Prop } = { name: 'Hanna' }) {
    this.name = Prop;
}
// Обьявил обьект Cars, и сразу его деструктуразирую на переменные,
// входящая переменная name:которую я переименовал на Prop, чтобы работать
// с ней внутри обьекта, что необязательно. Можно и не переименовывать.
// ( {} = {} ) - первая скобка принимает обьект, вторая задает значение по умолчанию
// иначе undefined
// const di = new Cars();
// const di2 = new Cars({ name: 'Dmytrii' });

// console.log('Cars: ', di);
// console.log('Cars: ', di2);



const CounterPlugin = function ({ rootSelector, initialV = 0, step = 11 } = {}) {
    this._value = initialV;
    this._step = step;
    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
    console.log(rootSelector);

    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');
    return refs;
}

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    })
    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    })
}

CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;
}


CounterPlugin.prototype.increment = function () {
    this._value += this._step;
}

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
}

// const K1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10 });
// console.log('Counter-1: ', K1);

// const K2 = new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
// console.log('Counter-2: ', K2);


class Maribo {
    constructor(model = 'NoName', price = 100) {
        this.model = model;
        this.price = price;
        console.log('Выполняется конструктор');

    }
}

const Deribo = new Maribo();
console.dir(Deribo);
console.log('Constructor: ', Deribo);


const Marvin = new Maribo('BMW', 40000);
console.dir(Marvin);
console.log('Constructor: ', Marvin);



// let animal = {
//     jumps: null
// };
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// alert(rabbit.jumps); // ? (1)  - true

// delete rabbit.jumps;

// alert(rabbit.jumps); // ? (2) - null

// delete animal.jumps;

// alert(rabbit.jumps); // ? (3) - undefined

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3
// };

// let bed = {
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     money: 2000
// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

// console.log('Result: ', pockets.pen);
// console.dir(pockets);


// let hamster = {

//     stomach: [],
//     eat(food) {
//         this.stomach += [food] + " ";
//     }
// };

// let speedy = {

//     __proto__: hamster
// };

// let lazy = {
//     __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log('Speedy: ', speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// lazy.eat("Melon");
// lazy.eat("Avocado");
// lazy.eat("Lemon");
// console.log('Lazy: ', lazy.stomach); // apple

// console.dir(lazy);



// let arr1 = ['Dima', 'Anna', 'Julia'];
// let [me, ...she] = arr1;
// console.log('Me: ', me);
// console.log('She: ', she);

let options = {
    title: "Menu",
    width: 40,
    height: 50,
    thickness: 100
};

// let { width: w = prompt("width?"), title = prompt("title?") } = options;
// let SecretWord = prompt("What is your name?");
// console.log('Hello', SecretWord);

// let { title, ...restAr } = options;
// console.log('Options:', options);
// console.log('Title: ', title);
// console.log('Rest: ', restAr);


// foo();
// function foo() {
//     console.log("This is a function foo()");

// }


// const objA = {
//     age: 22,
//     myAge: () => {
//         console.log('This ', this);

//     }
// }
// objA.myAge();

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');


// console.log('Name: ', user.name); // Ilya
// console.log('Surname: ', user.surname); // Kantor

// let user = {
//     name: "John",
//     age: 30,
//     sex: "male"
// };

// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(user)) {
//     // alert(`${key}:${value}`); // name:John, затем age:30
//     console.log(`${key}:${value}`);

// }


// let [name1, name2, ...name3] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log('"Julius", "Caesar", "Consul", "of the Roman Republic"');

// console.log('Name1: ', name1);
// console.log('Name2: ', name2);
// console.log('Others: ', name3);

// console.log('Others 1st: ', name3.length);

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// console.log(name, surname);

// Дестрактуризация
// let title, width, height;

// // ошибка будет в этой строке
// ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

// console.log('Title: ', title);


// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;
// // ваш код должен быть с левой стороны:
// // ... = user

// console.log('name:', name);
// // John
// console.log('age:', age);
// // 30
// console.log('isAdmin? - ', isAdmin);
//  // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let max = 0;
//     let maxName = null;


//     for (let [key, value] of Object.entries(salaries)) {
//         if (value > max) {
//             max = value;
//             maxName = key;
//             // console.log('test');


//         }


//     }
//     return console.log('maxName:', maxName);
//     ;

// };

// topSalary(salaries);


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"


// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Change code below this line
//     blacklistedEmails = [];

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         // if (this.blacklistedEmails.)
//         for (let i = 0; i < this.blacklistedEmails.length; i++) {
//             // console.log(this.blacklistedEmails[i]);
//             if (this.blacklistedEmails[i] == email) {
//                 return true;
//             }
//             else {
//                 return false;
//             }

//         }
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    add() {
        return (this.a ?? 0) + (this.b ?? 0);
    },
    addNumbers(c) {
        this.c = c ?? 0;
        return (this.a ?? 0) + (this.b ?? 0) + (this.c ?? 0);
    },
    mult() {
        return (this.a ?? 1) * (this.b ?? 1);
    }
};

// let a = prompt("A:");
// let b = prompt("B:");
calculator.read(2);
// console.dir(calculator);
// console.log('Results: ', calculator.refs);
console.log('Result Add: ', calculator.add());
console.log('Result AddNumbers: ', calculator.addNumbers(25));
console.log('Result Mult: ', calculator.mult());



// const clickBtnn = document.querySelector('[data-hi]');
// clickBtnn.addEventListener("click", onClick);

// function onClick(evt) {
//     console.log('Hello');


// }

window.addEventListener("keyup", onKey);   // document.addEventListener("keyup", onKey);
function onKey(params) {
    if (params.key === 'p') {
        console.log('The P was pressed');
        params.preventDefault();
        return;
    }
    // console.log('Keyboard: ', params);
}


window.addEventListener("keydown", onKes)
function onKes(params) {
    if (params.metaKey && (params.code === "KeyC")) {
        // console.log('The P was pressed');
        console.log('Are you trying to Copy?');
        params.preventDefault();
        return;
    }
    console.log('Keyboard: ', params);
    // console.log('Keyboard: ', params);

}

const formE1 = document.querySelector('.js-form');
// console.dir(formE1);
// console.dir(formE1.children);
formE1.classList.add('calls-js');
formE1.addEventListener("submit", onSubmit);

function onSubmit(params) {
    params.preventDefault(); //сбрасываем стандартные свойства для сабмита формы, которая перебрасывает на отдельное окно
    const { UserName, UserNumber, UserEmail } = params.currentTarget.elements;
    // console.log(UserName.value);
    // console.log(UserEmail.value);
    // console.log(UserNumber.value);
    const data = {
        name: UserName.value,
        email: UserEmail.value,
        age: UserNumber.value,
    }
    formE1.classList.toggle('calls-js');
    console.log(data);

}
// const list = document.querySelector('.js-list');
// console.dir(list.children);
// console.dir([...list.children]);
// console.log('😇Разбираем html-коллекцию и деструктиризируем значения ли-шек в массив:');
// console.log('List: ', list);
// console.log('List Children:', list.children);
// console.log('Деструктиризация li-шек', [...list.children]);
// const LiArr = [...list.children];
// const Ar = [LiArr.innerText];
// const ArrayMass = [];
// LiArr.forEach(arg => console.log('Element:', arg.innerText));
// LiArr.forEach(arg => ArrayMass.push(arg.innerText));
// console.log("Массив данных из li-шек: ", ArrayMass);
// let [firstNumber, ...othernumber] = ArrayMass;
// let [, firstNumber] = ArrayMass; // {1,2,3} будет взята двойка, а остальное отброситься
// let [, , firstNumber] = ArrayMass; // {1,2,3} будет взята тройка
// console.log('First: ', firstNumber);
// console.log('Other: ', othernumber);



// Как вставляются html элементы через JS - 2 способа

// const li = document.createElement('li')
// li.textContent = list.children.length + 1;
// // li.classList.add('title-color');
// list.classList.add('title-color');
// li.dataset.id = '123';
// const div = document.createElement('div');
// const h2 = document.createElement('h2');
// h2.textContent = 'Dmytrii Tsybuliak';
// li.append(div);
// div.append(h2);
// list.append(li);
// // console.log(li);


// console.log('List Children Lenght:', list.children.length);
// const li = `<li>${list.children.length + 1}<div><h2>Dmytrii Tsybuliak</h2></div></li>`;
// // list.insertAdjacentHTML('afterbegin', li); //подставляет первым элементом
// // list.insertAdjacentHTML('afterend', li); // после ul, отдельным li
// // list.insertAdjacentHTML('beforebegin', li); // перед ul, отдельным li
// list.insertAdjacentHTML('beforeend', li); // подставляет последним элементом


const cars = [
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
    {
        model: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        model: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        model: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        model: "Honda",
        type: "Accord",
        price: 20000,
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id: 4,
        model: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];

const container = document.querySelector(".js-container");
const markup = cars.map(
    ({ id = "none", model, type, price, img }) => `<li data-id="${id}">
    <img src="${img}" alt="${model}" class="img">
    <h2>Марка - ${model}</h2>
    <h3>Модель - ${type}</h3>
    <p>Ціна - ${price}</p>
</li>`
)
    .join("");

container.insertAdjacentHTML("beforeend", markup);
const containerAfter = document.querySelector(".js-container");
[...containerAfter.children].forEach((item) => {
    // console.log('ID', item.dataset.id);
    if (item.dataset.id !== "none") {
        item.remove();
    }
});

containerAfter.innerHTML = '';
