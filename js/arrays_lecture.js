"use strict";

var groceryList = ["bread", "eggs", "butter", "milk"];
// console.log("I have to buy " + groceryList[3] + ".");
var people = ["Pat", "John", "Kate", "Orion"];
// console.log(people[0], people[3]);
// console.log(people[3] + " is my friend.");
// console.log(people[2] + " is also my friend.")
// console.log("There are " + groceryList.length + " names in our array.")

for (var i=0; groceryList.length>i; i++){
	console.log("I have to buy " + groceryList[i] + ".");
}

// Given an array
var cities = ["San Antonio", "Austin", "Dallas", "Houston"];
// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```

for (var i=0; cities.length>i; i++){
	// console.log(cities[i])
}

// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```

for (var i=0; cities.length>i; i++){
	console.log("Student number " + (parseInt(i)+1) + " lives in " + cities[i]);
}

// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
prices.forEach(function(price, index){
	console.log("Item number " + (index+1) + ": " + price);
});

console.log("-----------------");

var array = ["zero", "one", "two", "three"];
var lastTwoOfArray = array.slice(2);
console.log(array);
console.log(lastTwoOfArray)
var firstTwoOfArray = array.slice(0,2);
console.log(firstTwoOfArray);
var arrayRepeatLastTwo = array.concat(lastTwoOfArray);
console.log(arrayRepeatLastTwo);
array.reverse();
console.log("This is how array looks like reversed " + array);





