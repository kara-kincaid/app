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

	$('<div/>', {
         'class' : 'additional-set', html: GetHtml()
     }).appendTo('.additional-sets-here');
     $('.add-set').click(function () {
           $('<div/>', {
               'class' : 'extraPerson', html: GetHtml()
     }).hide().appendTo('.additional-sets-here').slideDown('slow');
         
     });


    function GetHtml() {
		var len = $('.additional-set').length;
		var $html = $('.additional-set-template').clone();
		$html.find('[name=sets]')[0].name="sets" + len;
		$html.find('[name=reps]')[0].name="reps" + len;
		$html.find('[name=weight]')[0].name="weight" + len;
		$html.find('[name=measurement]')[0].name="measurement" + len;
		return $html.html();
	}
	// when .add-set is clicked, need to add (repeat?) form #set-0 and update form id to be #set-1, #set-2, etc...

	// when .add-exercise is clicked, need to add all new form (or new page?)

});