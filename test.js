$(document).ready(function(){

	// $.getJSON("test.json",function(data){
	// 	$.each(data,function(index,element){
	// 		console.log(element.items.url);
	// 	});
	// });

	$.getJSON("data/weightlifting-data.json", function(data){
		$.each(data.exercises, function(i, f) {
			var tblRow = "<tr>" + "<td>" + f.exerciseName + "</td>" +
           "<td>" + f.notes + "</td>" + "<td>" + f.details + "</td>" + "</tr>";
           $(tblRow).appendTo("#userdata tbody");
		});
		// $(".date").append(data[0].date);
		// $.each(data[0].exercises,function(index, element){
		// 	//Add a check in here to see if you're at the end of the data (look at data[0].exercises.length)
		// 	//if (not at last one, append space)
		// 	//else { dont append space }
		// 	$('.exercise-name').append(element.exerciseName + ' basdf ');
		// 	$('.notes').append(element.notes);


		// });

		// var output="<ul>";
		// for (var i=0 in data.exercises) {
		// 	output+="<li>" + exercises[i].exerciseName + "</li>"+ "<ul><li>" + exercises[i].notes + "<li>" + "<li>" + exercises[i].details.weight + exercises[i].details.measurement + exercises[i].details.sets + "x" + exercises[i].details.reps + "</li></ul></li>";
		// }

		// output+="</ul>";
		// 	document.getElementById("exercises").innerHTML=output;
		// });
	});
	//console.log(exercises[i].details.measurement);

});