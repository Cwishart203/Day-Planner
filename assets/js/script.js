console.log("Hello World!")


// Displays the current time //
var timeDisplay = $("#currentDay");
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplay.text(rightNow);
}


// Time Block //
var currentHour = moment().hour();
console.log(currentHour);
var timeBlock = $('textarea');
for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i] < currentHour) {
      $(timeBlock[i]).addClass('past');
  } else if (timeBlock[i] === currentHour) {
      $(timeBlock[i]).addClass('present');
    } else {
      $(timeBlock[i]).addClass('future')
    }
  };

// Save Button //




displayTime();
setInterval(displayTime, 1000)