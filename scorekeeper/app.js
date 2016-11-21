//Event Listener = binding a click event 

$(document).ready(function(){
//this is the fuctionyou write at the beginning of your javascript file, so that all of the html loads before your javascript runs
//var = variable / a container	
	var score = 0;
	$("#increase-5").on("click", function(){
		score +=5; /*variable*/
		$("#score").html(score)
	});
	
	$("#decrease-5").on("click", function(){
		score -=5;
		if (score <0) {
			score =0;}
//things inside curly bracket = statements or what you want it to do
//inside curly brackets is what you wanna run if the IF statement is true
		$("#score").html(score)

	});

	$("#submit-custom-score").on("click",function(){
		var customScore = parseInt($("#custom-score").val());
		score = customScore;
		$("#score").html(score);
/*what you put inside functions?
-Series of steps that tell the program what to do.*/

/*.val = Get the current value of the first elecment in the set of matched 
elements or set thevalue of every matched event*/
	});

});





