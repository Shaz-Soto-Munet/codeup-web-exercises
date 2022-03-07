$(document).ready(function() {

	"use strict";


console.log($);
console.log(jQuery);

	$('h1').click(function(){
		$('h1')
			.html("Hello, World!")
			.css("color", "lime");
	});

});
