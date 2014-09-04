$(document).ready(function(){

	//$.getJSON("data/weightlifting-data.json", function(data){
		var data;
		
		$.getJSON("data/weightlifting-data.json", function(jsonData){
			data = jsonData;

			var newLog = [];

			for(var i = 0; i < data.exercises.length; i++) {
				$('body').append(data.exercises[i].exerciseName);
				for(var x = 0; x < data.exercises[i].details.length; x++) {
					console.log(data.exercises[i].details[x]);
					//console.log(newLog);

					newLog.push(data.exercises[i].details[x]);
				
				}
				
			}
					console.log(newLog);

			//$(".exercises").html(newLog).appendTo();
			//$.each(data.exercises, function(i, f) {
			$.each(newLog, function(i, f) {
				var tblRow = "<ul>" + "<li><h2>" + f.exerciseName + "</h2>" + "<div>" + f.notes + "</div>" + "<ul><li>" + f.sets + "x" + f.reps + "</ul>";
				$(tblRow).appendTo("#userdata .notes");
			});


			//console.log(newLog);


			
		});

		



		


		// var obj = data.exercises[i];

		// for(var i = 0, l = data.exercises.length; i < l; i++) {
		// 		var tblRow = "<ul>" + "<li><h2>" + i.exerciseName + "</h2>" + "<div>" + i.notes + "</div>" + "<ul><li>" + i.details + "</ul>";
	 //        	$(tblRow).appendTo("#userdata .notes");
		// }
		// $.each(data.exercises, function(i, f) {
		// 	var tblRow = "<ul>" + "<li><h2>" + f.exerciseName + "</h2>" +
  //          "<div>" + f.notes + "</div>" + "<ul><li>" + f.details[0].sets + "</ul>";
  //          $(tblRow).appendTo("#userdata .notes");
		// });

	//console.log(i.notes);
	//});

});