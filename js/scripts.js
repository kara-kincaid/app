$(document).ready(function(){

	var data;
	
	$.getJSON("data/weightlifting-data.json", function(jsonData){
		data = jsonData;

		var newLog = [];

		$(".date").append(data.date);

		for(var i = 0; i < data.exercises.length; i++) {
			$(".exercise").append("<h3>" + data.exercises[i].exerciseName + "<span>" + data.exercises[i].notes + "</span></h3>");
			for(var x = 0; x < data.exercises[i].details.length; x++) {
				$(".exercise").append("<ul><li>" + data.exercises[i].details[x].sets + "x" + data.exercises[i].details[i].reps + " @ " + data.exercises[i].details[x].weight + data.exercises[i].details[x].measurement + "</li></ul>");

				newLog.push(data.exercises[i].details[x]);
			}
		}
	});

	
});