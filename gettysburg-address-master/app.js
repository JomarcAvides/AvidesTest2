// First did Document . ready
$(document).ready(function(){
//Made sure that had a link to Jquery and app.js
	$("body").hide().fadeIn(2000);

	$("p").hover(function(){

//2
//var $p = $("p")
//mouse center = mouse hovers in a series of word
//$("p").on("mouseenter"), fucntion(){
	//$(this).css("background-color", "yellow")
//}

//this = really beneficial word in JS, focusing in on the event that trigger the action
//never put this in quotes, simply placed inside the ()
//$("p").on("mouseleave", function() {
	//$(this).removeAttr("style");

//}

    $(this).css("background-color", "yellow");
    	}, function(){

	$(this).css("background-color", "white");
});

	$("h2").click(function(){
		$(this).animate({opacity: .40, marginLeft: "+=20px" }, 1000)
		$("body").animate({opacity: .50}, 500)

	});


});