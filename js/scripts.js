$(document).ready(function(){

	var data;
	
	$.getJSON("data/weightlifting-data.json", function(jsonData){
		data = jsonData;

		var newLog = [];

		$('body').append("<h1>" + data.date + "</h1>");

		for(var i = 0; i < data.exercises.length; i++) {
			$('body').append("<h2>" + data.exercises[i].exerciseName + "<span>" + data.exercises[i].notes + "</span></h2>");
			for(var x = 0; x < data.exercises[i].details.length; x++) {
				$('body').append("<ul><li>" + data.exercises[i].details[i].sets + "x" + data.exercises[i].details[i].reps + " @ " + data.exercises[i].details[i].weight + data.exercises[i].details[i].measurement + "</li></ul>");

				newLog.push(data.exercises[i].details[x]);
			
			}
			
		}
		
		});
});