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
	} if (parseFloat(length) === parseFloat(width)) {
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
// console.log(analyzeArray(someArray))

//----------------------------------------------------------------------------

var array1 = ["John", "Josh", "Justin", "Jacob"];
var array2 = ["Smith", "Joshington", "Morales", "Abernathy"];

function createNames (firstNameArray, lastNameArray){
	var arrayOfFirstAndLastNames = [];
	for (var i=0; i<firstNameArray.length; i++){
		arrayOfFirstAndLastNames.push({
			firstName: firstNameArray[i],
			lastName: lastNameArray[i]
		});
	}
	return arrayOfFirstAndLastNames;
}

// console.log(createNames(array1, array2));

//----------------------------------------------------------------------------

//Feb24
//write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//division by zero should return NaN
//examples:

function remainderOfTwoIntegers(num1, num2){
	if (num1>num2) {
		return num1 % num2;
	}
	return num2 % num1;
}

//---------------------------------------------------------------------------
// m=13
function printerError(string){
	var lengthOfString = string.length;
	var totalOverM = 0;
	for (var i=0; i<string.length; i++){
		if (string[i] > "m"){
			totalOverM++;
		}
	}
	return  "" + totalOverM + "/" + lengthOfString;
}
const detectPrinterErrors = input => `${(input.match(/[n-z]/g) !== null) ? input.match(/[n-z]/g).length : 0}/${input.length}`;

//------------------------------------------------------------------------------
// Mar 1
function isLockNessMonster(string) {
	if (typeof string === "string") {
		var stringIntoArray = string.split(" ");
		for (var i = 0; i < stringIntoArray.length; i++) {
			if (stringIntoArray[i] === "tree" && stringIntoArray[i + 1] === "fiddy") {
				return true;
			} else if (stringIntoArray[i] === "3.5") {
				return true;
			} else if (stringIntoArray[i] === "three" && stringIntoArray[i + 1] === "fifty") {
				return true;
			}
		}
		return false;
	} return false;
}

//----------------------------------------------------------------------------
// Mar 4
// create a function that accepts an objects with two properties, parcelNumber and weight and returns the weight

function parcelWeight(object){
	return object.weight;
}

var parcel = {
	parcelNumber: 1,
	weight: 20
}

// Create a function that accepts an array of objects with two properties, parcelNumber and weight, and returns the total weight of all parcels

var parcels = [{
	parcelNumber:1,
	weight:20
}, {
	parcelNumber:2,
	weight:25
}]
// output:45


function totalWeight(arrayOfObjects){
	var total = 0;
	for (var i=0; i < arrayOfObjects.length; i++){
		total += arrayOfObjects[i].weight;
	}
	return total;
}

// Create a function that accepts an array of objects with two properties, parcelNumber amd weight, and outputs the content to a web page in two columns, with the total listed at the end

function outputParcelInfo(parcelsArray){
	var outputDiv = document.getElementById("parcelInfo");
	var total = 0;
	var html = "<table><tr><th>Parcel Number</th><th>Weight</th></tr></table>"
}

//DOM warmup: 
//create a heading that says" good morning!"
//create a button that says "Press if after 12pm"
//When the button is pressed, "Good morning!" changes to "Good afternoon"

var goodMorning = document.getElementById('good-morning');
var button = document.getElementById('button');

button.addEventListener('click', changeToAfternoon);

function changeToAfternoon(){
	if (goodMorning.innerText === "Good morning!"){
		goodMorning.innerText = "Good afternoon!";
		button.innerText = "Press if before 12pm";
	} else {
		goodMorning.innerText = "Good morning!";
		button.innerText = "Press if after 12pm";
	}
}

//-----------------------------------------------------------------------
// Mar 7

// Consider the following array of users:

var users = [
	{
		username: 'fsmith',
		email: 'fsmith@email.com',
		numberOfLogins: 23
	},
	{
		username: 'ksmith',
		email: 'ksmith@email.com',
		numberOfLogins: 100
	},
	{
		username: 'lsmith',
		email: 'lsmith@email.com',
		numberOfLogins: 10
	}
];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...
//
// {
// 	username: 'fsmith',
// 		email: 'fsmith@email.com',
// 	numberOfLogins: 23
// }
//
function returnFirstUser(arrayOfObjects){
	return arrayOfObjects[0];
}

// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133
//

function returnTotalUserLogins(arrayOfObjects){
	var totalLogins = 0;
	for (var i=0; i<arrayOfObjects.length; i++){
		totalLogins += arrayOfObjects[i].numberOfLogins;
	}
	return totalLogins;
}


// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
// 	username: 'ksmith',
// 		email: 'ksmith@email.com',
// 	numberOfLogins: 100
// }

function returnMostFrequentUser(arrayOfObjects){
	arrayOfObjects.sort((a,b) => (a.numberOfLogins > b.numberOfLogins) ? 1 : ((b.numberOfLogins > a.numberOfLogins) ? -1 : 0));
	arrayOfObjects.reverse();
	return arrayOfObjects[0];
}

//----------------------------------------------------------
// Mar 8

//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//


var operations1 = [

	{
		operation: 'add',
		integer: 7
	},
	{
		operation: 'add',
		integer: 3
	}
]


var operations2 = [

	{
		operation: 'add',
		integer: 7
	},
	{
		operation: 'add',
		integer: 3
	},
	{
		operation: 'multiply',
		integer: 3
	},
]

var operations3 = [

	{
		operation: 'subtract',
		integer: 5
	},
	{
		operation: 'multiply',
		integer: -2
	},
	{
		operation: 'add',
		integer: 10
	},
]


function computeOperations(operations, startingValue){
	var finalizedOperation = startingValue;
	for (var i=0; i<operations.length; i++){
		if (operations[i].operation === "add"){
			finalizedOperation += operations[i].integer;
		} else if (operations[i].operation === "multiply"){
			finalizedOperation *= operations[i].integer;
		} else if (operations[i].operation === "subtract"){
			finalizedOperation -= operations[i].integer;
		}
	}
	return finalizedOperation;
}


// console.log(computeOperations(operations1, 10)); // returns 20
// console.log(computeOperations(operations2, 10)); // returns 60
// console.log(computeOperations(operations3, 10)); // returns 0

//-------------------------------------------------------------------------
// Mar 10

// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:

function addTwos(array){
	var total = 0;
	array.forEach(function(element){
		if(element === 2){
			total += element;
		}
	})
	return total;
}

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];

console.log(addTwos(nums1)) // returns 2
console.log(addTwos(nums2)) // returns 4
console.log(addTwos(nums3)) // returns 0
console.log(addTwos(nums4)) // returns 8
console.log(addTwos(nums5)) // returns 10


//----------------------------------------------------------------
// Mar 11


// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
// 	Examples...
//
// returnStringObject('hello') // returns...
//
// {
// 	stringValue: 'hello',
// 		stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
// 	stringValue: 'codeup',
// 		stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }


function returnStringObject(string){
	return {
		stringValue: string,
		stringArray: string.split("")
	};
}

console.log(returnStringObject("codeup"));

//----------------------------------------------------------------
//Mar 14

// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.

var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

function countNegatives(array){
	var count = 0;
	array.forEach(function(num){
		if (num<0){
			count++;
		}
	})
	return count;
}

//-------------------------------------------------------------------

// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
// 	Example...

function createFirstNamesArray(array){
	var firstNames = [];
	for (var i=0; i<array.length; i++){
		firstNames.push(array[i].firstName);
	}
	return firstNames;
}

var users = [
	{
		firstName: 'Bob',
		lastName: 'Smith',
		email: 'bob@email.com'
	},
	{
		firstName: 'Sally',
		lastName: 'Smith',
		email: 'sally@email.com'
	},
	{
		firstName: 'Fred',
		lastName: 'Smith',
		email: 'fred@email.com'
	},
	{
		firstName: 'Cathy',
		lastName: 'Smith',
		email: 'cathy@email.com'
	},
	{
		firstName: 'Joe',
		lastName: 'Smith',
		email: 'joe@email.com'
	},
];

console.log(createFirstNamesArray(users));; // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

//-------------------------------------------------------------------
//Mar 17


function changeBackgroundRed(){
	if(square.style.backgroundColor === "gray") {
		square.style.backgroundColor = "red";
	} else {
		square.style.backgroundColor = "gray";
	}
};

// //Vanilla JS:
//
//
// var square = document.getElementById("square")
// square.addEventListener('click', changeBackgroundRed)
//


// Using jQuery
// $("#square").click(changeBackgroundRed);

$("#reset").click(function(){
	$("#square").css("background-color", "red");
})

//------------------------------------------------------------------
//Mar 21

$(".square").on("click", function() {
	$(this).css("background-color", "yellow");
})

$(".square").hover(function(){
		$(this).css("background-color", "red")
	}, function() {
		$(this).css("background-color", "white");
})

//----------------------------------------------------------------

function encodeStr(string){
	let arrayOfCharacters = string.split("");
	arrayOfCharacters.forEach(function(char, index){
		if (char === "a" || char === "A"){
			arrayOfCharacters[index] = "@";
		} else if (char === "i" || char === "I"){
			arrayOfCharacters[index] = "1";
		} else if (char === "s" || char === "S"){
			arrayOfCharacters[index] = "$";
		}
	})
	let newString = arrayOfCharacters.join("");
	return newString;
}

// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomse ‘$’
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

//------------------------------------------------------------------

// Write a function, returnMostCommonVowel, that takes in a string and returns the most common vowel in the string.
// 	Assume the characters in the string are all lowercase and only 'a' 'e' 'i' 'o' 'u' count as vowels. Return the most common vowel from the string.
//
// 	If the highest vowel count is shared between multiple vowels, return the first vowel alphabetically. (2 'a's and 2 'e's should 'a')
//
// If no vowels are in the string return false.

function returnMostCommonVowel(string){
	let arrayOfCharacters = string.split("");

	// let vowel = arrayOfCharacters.reduce((accumulation,currentCharacter)=>{
	//
	// },"")
	// if (vowel === ""){
	// 	return false;
	// } else {
	// 	return vowel;
	// }

	let countA = 0;
	let countE = 0;
	let countI = 0;
	let countO = 0;
	let countU = 0;

	arrayOfCharacters.forEach((element)=>{
		if (element === "a"){
			countA++;
		} else if (element === "e"){
			countE++;
		} else if (element === "i"){
			countI++;
		} else if (element === "o"){
			countO++;
		} else if (element === "u"){
			countU++;
		}
	})

	if (countA === 0 && countE === 0 && countI === 0 && countO === 0 && countU === 0){
		return false;
	} else if (countA>=countE && countA>=countI && countA>=countO && countA>=countU){
		return "a";
	} else if (countE>=countA && countE>=countI && countE>=countO && countE>=countU){
		return "e";
	} else if (countI>=countA && countI>=countE && countI>=countO && countI>=countU){
		return "i";
	} else if (countO>=countA && countO>=countE && countO>=countI && countO>=countU){
		return "o";
	} else if (countU>=countA && countU>=countE && countU>=countI && countU>=countO){
		return "u";
	}

}
//-------------------------------------------------------------

// Create a function, returnAvgAdminSalary, that takes in an array of users and returns the average salary of all admins. Round to the nearest dollar.



const users2 = [
	{
		name: 'Fred',
		isAdmin: true,
		salary: 20000
	},
	{
		name: 'Cathy',
		isAdmin: false,
		salary: 40000
	},
	{
		name: 'Sally',
		isAdmin: true,
		salary: 80000
	},
	{
		name: 'Kyle',
		isAdmin: true,
		salary: 50000
	},
	{
		name: 'Cynthia',
		isAdmin: false,
		salary: 100000
	}
];

function returnAvgAdminSalary(array) {
	const admins = array.filter(user => user.isAdmin);
	let  totalSalary = admins.reduce((total, user) => {
		return user.salary + total;
	}, 0)
	return totalSalary / admins.length;
}

console.log(returnAvgAdminSalary(users2)); // returns 116666