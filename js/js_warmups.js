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

//-------------------------------------------------------------

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

// createUserMsg(user);

//---------------------------------------------------------------------
//Feb 14

var areaOrPerimeter = function(length, width){
	if (isNaN(parseFloat(length) || isNaN(parseFloat(width)))) {
		return false;
	} if (parseFloat(length) == parseFloat(width)) {
		return parseFloat(length) * 4;
	} return (parseFloat(length) + parseFloat(width)) * 2;
}

//----------------------------------------------------------------------

//Feb 15
function sumStr(string1, string2){
	var stringsSum = Number(string1) + Number(string2);
	if ((typeof string1 !== "number" && typeof Number(string1) === "number") && (typeof string2 !== "number" && typeof Number(string2) === "number")){
		return stringsSum.toString();
	} return false;
}
//----------------------------------------------------------------------

function getSimpleUser(user){
	var firstName =  user.firstName.toLowerCase();
	var lastName = user.lastName.toLowerCase();
	return {firstName, lastName}
}

//----------------------------------------------------------------------------
//Feb 18
// Create a function, analyzeArray, that takes in an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.



function analyzeArray(array){
	var containsAllStrings = true;
	var concatenatedStrings = "";
	for (var i=0; i<array.length; i++){
		if (typeof array[i] !== "string"){
			containsAllStrings = false;
		}
	}
	array.forEach(function (element){
		if (typeof element === "string") {
			concatenatedStrings = concatenatedStrings + element;
		}
	})
	var arrayInfo = {}
		arrayInfo.lenghtOfArray = array.length;
		arrayInfo.containsAllStrings = containsAllStrings;
		arrayInfo.combinedResult = concatenatedStrings;
	return arrayInfo;
}


var someArray = ["bob", "100", "null", false]
console.log(analyzeArray(someArray))

//----------------------------------------------------------------------------