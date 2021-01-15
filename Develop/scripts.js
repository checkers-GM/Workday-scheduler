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
});