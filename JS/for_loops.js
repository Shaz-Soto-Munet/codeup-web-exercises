"use strict";

//exercise 2
// function showMultiplicationTable(num){
// 	for (var i=1; i<=10; i++){
// 		console.log(num * i);
// 	}
// }

// showMultiplicationTable(7);

//exercise 3
// for (var i=1; i<=10; i++){
// 	var randomNumber = Math.floor(Math.random()*200)+20;
// 	// console.log(i + ". " + randomNumber);
// 	(i % 2 === 0)
// 		? console.log(randomNumber + " is even.")
// 		: console.log(randomNumber + " is odd.");
// }

//exercise 4: unfinished
for (var i="1"; i.length<10; i+="1"){
	console.log("First loop output is " + i);
	for (var x = 1; x < 10; x = x + i) {
		console.log("Second loop output is " + x);
		console.log(i * i.length);
	}
}

//exercise 5
// for (var i=100; i>0; i=i-5){
// 	console.log(i);
// }