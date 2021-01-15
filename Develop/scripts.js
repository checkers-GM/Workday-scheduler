$(document).ready(function() {
    //adding text element for time inside of the currentday div using Moment.js
    $("#currentDay").text(moment().format("LL"));

    // listen for mouse click on save button

    $(".saveBtn").on("click", function() {
        // grab text inside of textArea
        var userEntry = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");

        // save intol local storage
        localStorage.setItem(time, userEntry);
    });

    function hourColorizer() {
        //get the present number of hours
        var presentHour = moment().hours();
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[0]);

            //setting past, present and future

            if (hourBlock < presentHour) {
                $(this).addClass("past");
            } else if (hourBlock === presentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourColorizer();

    // load saved input from LocalStorae

    $("#9-hour .description").val(localStorage.getItem("9-hour"));
    $("#10-hour .description").val(localStorage.getItem("10-hour"));
    $("#11-hour .description").val(localStorage.getItem("11-hour"));
    $("#12-hour .description").val(localStorage.getItem("12-hour"));
    $("#13-hour .description").val(localStorage.getItem("13-hour"));
    $("#14-hour .description").val(localStorage.getItem("14-hour"));
    $("#15-hour .description").val(localStorage.getItem("15-hour"));
    $("#16-hour .description").val(localStorage.getItem("16-hour"));
    $("#17-hour .description").val(localStorage.getItem("17-hour"));
});