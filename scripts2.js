
// Class overview with David for part two of jQuery lab.
// Will use this with my currnet code and re-write to match all properties.
// Still behind with this section of jQuery


$(document).ready(function() {
    console.log("test");
var tableReservations = [];
var lastTableClicked;

function getNumberFromTable(table) {
    return parseInt( $(table).text().trim() );
}

$(".available").on("click", function() {
        $("#reservation").css("display", "block");
    lastTableClicked = this;
    var tableNum = getNumberFromTable(this);
    $("#tableNumber").text("Table Number: " + tableNum);


    // the x button on the new reservation page
    $("i").on("click", function() {
    $("#reservation").css("display", "none"); });
});

$(".table").on("mouseenter", function() {
    var tableNum = getNumberFromTable(this);
    if ($(this).hasClass("reserved")) {

        var reservation = tableReservations[tableNum];
        console.log(reservation);
    }
});

$("#saveButton").on("click", function () {
    // 1. Add reserved class to the table
    $(lastTableClicked).addClass("reserved").removeClass("available");

    // 2. Store the info from form
    var name =  $("#name").val();
    var partySize =  $("#partySize").val();
    var reservation = {
        name: name,
        partySize: partySize
    };
    var tableNum = getNumberFromTable(lastTableClicked);
    tableReservations[tableNum] = reservation;
    console.log(tableReservations);


    // 3. hide the form
    $("#reservation").css("display", "none");
});
});
