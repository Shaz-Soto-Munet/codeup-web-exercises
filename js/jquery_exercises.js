$(document).ready(function() {



	// "use strict";
	//
	// $(".codeup").css("border", "1px solid red");
	// $("li").css("font-size", "20px");
	// $("h1, p, li").css("background-color", "yellow");
	// // alert($("h1")[0].innerText);
	// $("div:nth-of-type(1)").css({
	// 	"background-color": "blue",
	// 	"font-weight": "bold"
	// });
	// console.log($("div")[1].innerText);
	// console.log($("div"));
	//

//Mouse Events:

	$("h1").click(function(){
		$(this).css("background-color", "blue")
	});

	$("p").dblclick(function(){
		$(this).css("font-size", "18px");
	});

	$('li').hover(function(){
		$(this).css("color", "red");
	}, function(){
		$(this).css("color", "black");
	});

});
