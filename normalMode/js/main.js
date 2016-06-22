//create div class=container
//create h1 class=clock

var clock = document.getElementById("time");
var checkTime = function() {
  var now = new Date();
  var hours = now.getHours();
  if (String(hours).length == 1) {
    hours = "0" + hours
  }
  var minutes = now.getMinutes();
  if (String(minutes).length == 1) {
    minutes = "0" + minutes
  }
  var seconds = now.getSeconds();
  if (String(seconds).length == 1) {
  seconds = "0" + seconds
}
  var time = hours + ":" + minutes + ":" + seconds
  clock.innerHTML = time
}

window.setInterval(checkTime, 1000);
