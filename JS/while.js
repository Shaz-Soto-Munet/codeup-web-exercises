"use strict";

//Code commented out is the first exercise that is supposed to be done using a for loop; keeping for future reference

// function showMultiplicationTable(input){
// 	var number = 1;
// 	while (number<=10){
// 		console.log(input * number);
// 		number++;
// 	}
// }
// showMultiplicationTable(7);


//while loop
// var number = 2;
// while(number < 70000){
// 	console.log(number);
// 	number = number * 2;
// }

//do-while
// var randomNumber = Math.ceil(Math.random() * 6);
// var guess;
//
// do {
// 	guess = parseInt(prompt("Enter a number between 1 and 6."));
// } while (guess !== randomNumber);
//
// alert("Your guess of " + guess + " matches the number " + randomNumber + "!");

/*


var allCones = Math.floor(Math.random()*50)+50;

do {
	//random number represents the amount of cones a customer is trying to buy
	var conesToBeSold = Math.floor(Math.random() * 5) + 1;

	//ternary operator used in order to console.log proper grammar
	(allCones === 1)
		?console.log("You currently have " + allCones + " cone for sale.")
		:console.log("You currently have " + allCones + " cones for sale.");

	//if statement used to make sure i'm not selling more cones than i have for sale
	if (allCones < conesToBeSold) {
		console.log("Cannot sell " + conesToBeSold + " cones because I only have " + allCones + " left. Sorry!!");
		continue;
	}

	//ternary operator used in order to console.log proper grammar
	(allCones === 1)
		?console.log(conesToBeSold + " cone was sold.")
		:console.log(conesToBeSold + " cones were sold.");
	allCones = allCones - conesToBeSold;

} while (allCones > 0);

console.log("All cones were sold! Let's go home.");

*/

//For loops

// for (var count=100; count>=0; count--){
// 	console.log(count);
// }

