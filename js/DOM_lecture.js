"use strict";

// var accessTheDOM = window.document.getElementById("marvel");
// var showMe = accessTheDOM.innerText;
// alert(showMe);

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc")


// ---Modifying dc object properties:---
// dc.innerText = dc.innerText + " Animated Universe";
// dc.innerText += " rocks!"

// ---Setting the marvel element to hotpink via editing the class:---
// marvel.setAttribute("class", "hotPink")
// marvel.className = "hotPink";
// dc.className = "hotPink";

var hotPinks = document.getElementsByClassName("hotPink");
// console.log(hotPinks)
// ---Loop below assign a style with the hotpink color:----
// for (var i=0; i<hotPinks.length; i++){
// 	hotPinks[i].style.color = "hotpink";
// }



var submitButton = document.querySelector("#colorSubmission");
submitButton.onclick = function(){
	var colorInput = document.getElementById("colorPreference");
	var userInput = colorInput.value;
	var paragraphs = document.getElementsByTagName("p")
	var label = document.getElementById("label")
	for (var i=0; i<paragraphs.length; i++){
		paragraphs[i].style.color = userInput;
	}
		label.style.color = userInput;
}


//Data-attributes

// Get a reference to the hulk <p> element
var theHulk = document.getElementById("hulk");

// Get a reference to the data attribute, old school way
var hulkState = theHulk.getAttribute("data-state");

// output the value of the data-state attribute to the page
theHulk.innerText += " is in " + hulkState + " state"

// get the value of the data strength attribute, the new way
var hulkStrength = theHulk.dataset.strength;

theHulk.innerText += ". His strength is " + hulkStrength + ".";

var hulkIntelligence = theHulk.dataset.intelligence;

theHulk.innerText += " His intelligence is " + hulkIntelligence + "."

// get reference to transfomr button
var transformHulk = document.getElementById("transformHulk");
transformHulk.onclick = function(){
	var hulk = document.getElementById("hulk");
	if (hulkState === "hulk"){
		hulk.dataset.state = "Bruce Banner";
	} else {
		hulk.dataset.state = "hulk";
	}
	hulk.innerText = "The Hulk is in " + hulk.dataset.state + " state";
}