"use strict";

function noIdeaWhatYouSaid() {
	return "I have no idea what you just said.";
}

function timesTwo(input){
	return input * 2;
}

//The code below is for the loops lecture

// var slices = 4;
// while(slices > 0){
// 	console.log("I'll have a slice.");
// 	slices--;
// 	console.log("Now there's " + slices + " left.");
// }
// console.log("Awww... no more pizza :(");

let counter;
// while(counter <= 100){
// 	console.log(counter);
// 	counter++;
// }


// counter = 100;
// while(counter >= 0){
// 	console.log(counter);
// 	counter--;
// }

// var number = 5;
// while (number < 200){
// 	console.log(number);
// 	number = number * 2;
// }

//Feb 8
function squared(num){
	return num ** 2;
}
function plusItself(num){
	return num + num;
}
function doubleAndAdd(num1, num2){
	return (num1 * 2) + (num2 * 2);
}

function stringLength(string){
	return string.length;
}
function stringLengthSum(string1, string2){
	return string1.length + string2.length;
}
function stringLengthEvenOrOdd(string){
	return (string.length % 2 === 0) ?"even" :"odd";
}

// Write a function, createUserMsg, that takes in a user object like the following...
var user = {
	username: 'jbomb',
	email: 'john@email.com',
	isAdmin: true
}
// ...and returns a string output that displays in the console like this...
// ‘User jbomb is an admin and can be reached at john@email.com’
// If jbomb were not an admin, the message should display...
// ‘User jbomb is not an admin and can be reached at john@email.com’

function createUserMsg(user){
	(user.isAdmin)
		? console.log("User " + user.username + " is an admin and can be reached at " + user.email + ".")
		: console.log("User " + user.username + " is not an admin and can be reached at " + user.email + ".");
}

createUserMsg(user);



