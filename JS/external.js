"use strict";

console.log("Hello from external JavaScript!");
//
// alert("Welcome to my website!");
//
// var userFavColor = prompt("What is your favorite color?");
// alert(userFavColor + " is my favorite color too!");


//Exercise 1:

// var littleMermaid = Number(prompt("For how long will you rent the Little Mermaid movie?"));
// var brotherBear = Number(prompt("For how long will you rent the Brother Bear movie?"));
// var hercules = Number(prompt("For how long will you rent the Hercules movie?"));
// var pricePerDay = 3;
// var totalPrice = (littleMermaid + brotherBear + hercules) * pricePerDay;
// alert("Your total price will be " + totalPrice);


//Exercise 2:

// var googlePay = 400;
// var facebookPay = 380;
// var amazonPay = 350;
// var googleHours = Number(prompt("How many hours have you worked for Google this week?"));
// var facebookHours = Number(prompt("How many hours have you worked for Facebook this week?"));
// var amazonHours = Number(prompt("How many hours have you worked for Amazon this week?"));
// var totalPay = (googlePay*googleHours) + (facebookHours*facebookPay) + (amazonPay*amazonHours);
// alert("Your total pay for this week will be " + totalPay);

//Exercise 3:

// var classEnrollment = false;
// var scheduleConflict = confirm("Please hit OK if your schedule allows you to attend this class.");
// var classFull = false;
//
// if (scheduleConflict == true && classFull == false) {
//     alert("You have succesully been signed up for this class.")
// } else {
//     alert("You have not been signed up for this class.")
// }

//Exercise 4:

var offerExpired = false;
var howManyItems = Number(prompt("How many items are you buying?"));
var premiumMember = confirm("Click OK if you are a Premium Member");

if (offerExpired == false && (howManyItems >= 2 || premiumMember == true)) {
    alert("The offer was applied.");
} else {
    alert("The offer was not applied.");
}









