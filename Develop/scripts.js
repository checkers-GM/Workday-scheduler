$(document).ready(function() {
    //adding text element for time inside of the currentday div using Moment.js
    $("#currentDay").text(moment().format('LL'))

    // listen for mouse click on save button

    $(".saveBtn").on("click", function() {
        // grab text inside of textArea
        var userEntry = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");

        // save intol local storage
        localStorage.setItem(time, userEntry)
    })

});