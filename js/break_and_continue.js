"use strict";

while (true) {
	var number = prompt("Please provide an odd number between 1 and 50.");
	if (number%2!==0 && number >=1 && number<=50) {
		break;
	}
}

for (var i=1; i<=50; i+=2){
	if (i === parseInt(number)){
		console.log("Yikes! Skipping number: " + number);
	} else {
		console.log("Here is an odd number: " + i);
	}
}

