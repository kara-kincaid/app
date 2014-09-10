$(document).ready(function(){

	var data;
	
	$.getJSON("data/weightlifting-data.json", function(jsonData){
		// define json data
		data = jsonData;

		var newLog = [];

		$(".date").append(data.date);

		// determine length for each item in object exercises, append data to html
		for(var i = 0; i < data.exercises.length; i++) {
			$(".exercise").append("<h3>" + data.exercises[i].exerciseName + "<span>" + data.exercises[i].notes + "</span></h3>");
			// determine length for each item under object details, append data to html
			for(var x = 0; x < data.exercises[i].details.length; x++) {
				$(".exercise").append("<ul><li>" + data.exercises[i].details[x].sets + "x" + data.exercises[i].details[i].reps + " @ " + data.exercises[i].details[x].weight + data.exercises[i].details[x].measurement + "</li></ul>");

				// push data to variable newLog
				newLog.push(data.exercises[i].details[x]);
			}
		}
	});

	// get html in .additional-set, append it to .additional-sets-here
	// on click of .add-set add form to additional-sets-here
	$('<div/>', {
		'class' : 'additional-set', html: GetHtml()
		}).appendTo('.additional-sets-here');
		$('.add-set').click(function () {
		$('<div/>', {
		'class' : 'additional-set', html: GetHtml()
		}).hide().appendTo('.additional-sets-here').slideDown('slow');

	});


	// clone .additional-set-template, add to variable $html
	// get length of .additional-set, add to variable len
    function GetHtml() {
		var len = $('.additional-set').length;
		var $html = $('.additional-set-template').clone();
		$html.find('[name=sets]')[0].name="sets" + len;
		$html.find('[name=reps]')[0].name="reps" + len;
		$html.find('[name=weight]')[0].name="weight" + len;
		$html.find('[name=measurement]')[0].name="measurement" + len;
		return $html.html();
	}
	

	// var jsonData = {};
	// var formData = $("#workoutForm").serializeArray();
	// $.each(formData, function() {
	// 	if (jsonData[this.name]) {
	// 		if (!jsonData[this.name].push) {
	// 			jsonData[this.name] = [jsonData[this.name]];
	// 		}
	// 		jsonData[this.name].push(this.value || '');
	// 	} else {
	// 		jsonData[this.name] = this.value || '';
	// 	}

	// });
	
	// console.log(jsonData);

	// $(".finish").click(function() {
	// 	var MyForm = $("#workoutForm").serializeArray();
	// 	console.log(MyForm);
	// });
	
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
		};

		$(function() {
		$('#workoutForm').submit(function() {
			$('.result').text(JSON.stringify($('#workoutForm').serializeObject()));
			return false;
		});
	});
	

});