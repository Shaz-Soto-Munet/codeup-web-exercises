"use strict";

// alert("Hello, World!");

// var userChoice = confirm("Did you get the message we sent?");
// console.log(userChoice);
//
// if(userChoice){
//     alert("Good choice");
// } else {
//     ":-(";
// }

var currentSpeed = Number(prompt("How fast are you going now?"));
console.log("Your current speed is " + currentSpeed);

var plannedSpeedIncrease = Number(prompt("How much faster do you wanna go (in mph)?"));
var currentSpeedPlusIncrease = currentSpeed + plannedSpeedIncrease;
console.log("Your planned speed is " + (currentSpeed + plannedSpeedIncrease));

// console.log("The variable currentSpeed is a " + typeof currentSpeed);

var distanceLeft = Number(prompt("How may miles are you from your destination?"));
var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
var timePlannedSpeed = (distanceLeft/currentSpeedPlusIncrease) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed).toFixed();
alert("If you drive at " + currentSpeedPlusIncrease + " mph, you will arrive " + timeGain + " minutes sooner.");










