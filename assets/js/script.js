console.log("Hello World!")


// Displays the current time //
var timeDisplay = $("#currentDay");
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    timeDisplay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000)

// Time Block //
var currentHour = moment().hour();
console.log(currentHour);
var timeBlock = $('textarea');
for (var i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].id < currentHour) {
      $(timeBlock[i]).addClass('past');
  } else if (timeBlock[i].id == currentHour) {
      $(timeBlock[i]).addClass('present');
    } else {
      $(timeBlock[i]).addClass('future')
    }
  };


// Local Storage //

$(".saveBtn").on("click", function() {
  var id = $(this).attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(id, description);
});

$("#9").val(localStorage.getItem("9-btn"))
$("#10").val(localStorage.getItem("10-btn"))
$("#11").val(localStorage.getItem("11-btn"))
$("#12").val(localStorage.getItem("12-btn"))
$("#13").val(localStorage.getItem("13-btn"))
$("#14").val(localStorage.getItem("14-btn"))
$("#15").val(localStorage.getItem("15-btn"))
$("#16").val(localStorage.getItem("16-btn"))
$("#17").val(localStorage.getItem("17-btn"))
