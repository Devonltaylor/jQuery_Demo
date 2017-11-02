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
//.removeClass("available").addClass("reserved") - this will mark tables with secondary color from css after given a new class.

		});

	});


	$("#reservation").on("click", function() {
		if ($(".circle.available")) {
			tableNowReserved.removeClass("available").addClass("reserved");
			var tableNum = $(tableNowReserved).attr("data-tablenum");
			console.log(tableNum);
			var guestName = $("#name").val();
			var seats = $("#seats").val();

			reservedTables[elementIndex] = new Table(guestName, seats, tableNum);

			$("form").fadeOut("slow");
		}
	});


	$(".circle").mouseover(function() {
	if ($(this).hasClass("reserved")) {
		console.log(reservedTables);
		console.log(this);
		var box = $(this).after("<div class='box'>Name: " + reservedTables[elementIndex].name + " Seats: " + reservedTables[elementIndex].seats + "</div>" )

	}
});

// functions to close out reserve information (the "X" button)
	$("i").on("click", function(e) {
		$("form").css("display", "none");
	});

});
