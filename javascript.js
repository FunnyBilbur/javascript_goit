"use strict";
const isComing = confirm("Please confirm hotel reservation");
//let birtday = prompt("Enter your birthday date:");
console.group('Hotel Reservation');
console.log("Is they coming? - " + isComing);
console.log('%c Dmytrii ', 
            'color: white; background-color: #D33F49', 
    'Tsybuliak');
//console.log("Age: " + birtday);
console.groupEnd();
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

function getIntMax(max) {
    return Math.floor(Math.random() * max);
}

console.log(getIntMax(100));
console.log("Text:"+parseInt(Math.random()*100));