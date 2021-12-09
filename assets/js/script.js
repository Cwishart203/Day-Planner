console.log("Hello World!")


// Displays the current time //
var timeDisplay = $("#currentDay");
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplay.text(rightNow);
}


// Time Block //


// Time Block Color //


displayTime();
setInterval(displayTime, 1000)