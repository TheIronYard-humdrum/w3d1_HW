//create div class=container
//create h1 class=clock

console.log("Hi, there");
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
if (String(minutes).length == 1) {
    minutes = "0" + minutes
  }
var seconds = now.getSeconds();
var clock = document.getElementById("time")
var time = hours + ":" + minutes + ":" + seconds
clock.innerHTML = time

var checkTime = function() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (String(minutes).length == 1) {
    minutes = "0" + minutes
  }
  var seconds = now.getSeconds();
  var time = hours + ":" + minutes + ":" + seconds
  clock.innerHTML = time
}

window.setInterval(checkTime, 1000);
