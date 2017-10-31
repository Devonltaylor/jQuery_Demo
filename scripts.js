$(document).ready(function() {

 // all jQuery / JS goes in here

	/**************************
  Show reservation when clicked (html content)
  ***************************/

	$(".available").on("click", function(e) {
		$("form").css("display", "block");
		var tableNum = $(this).text();
		$("p#tableNum").text("Table Number: " + tableNum);


		$("input[type=submit]").on("click", function(e) {
			$("form").css("display", "none");

			e.preventDefault();
			return $("div .circle:contains("+ tableNum.toString() + ")").removeClass("available").addClass("reserved");
//.removeClass("available").addClass("reserved") - this will mark tables with secondary color from css
		});

	});

// functions to display reserve information
	$("i").on("click", function(e) {
		$("form").css("display", "none");
	});

	$(".circle reserved").on("click", function() {
		$("form").css("display", "none");
	});

});
