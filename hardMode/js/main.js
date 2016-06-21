var background = document.querySelector("body");
var clock = document.getElementById("time");

var changeColor = function() {
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hexhours = hours.toString(16);
  if (hexhours.length == 1) {
    hexhours += hexhours
  }
  hexmins = minutes.toString(16);
  if (hexmins.length == 1) {
    hexmins += hexmins
  }
  hexsecs = seconds.toString(16);
  if (hexsecs.length == 1) {
    hexsecs += hexsecs
  }

  var clockTime = hexhours + hexmins + hexsecs
  clock.innerHTML = clockTime;
  background.style.backgroundColor = ("#" + hexhours + hexmins + hexsecs);
}



window.setInterval(changeColor, 1000);


// var clock = document.getElementById("time");
// var checkTime = function() {
//   var now = new Date();
//   var hours = now.getHours();
//   if (String(hours).length == 1) {
//     hours = "0" + hours
//   }
//   var minutes = now.getMinutes();
//   if (String(minutes).length == 1) {
//     minutes = "0" + minutes
//   }
//   var seconds = now.getSeconds();
//   if (String(seconds).length == 1) {
//   seconds = "0" + seconds
// }
//   var time = hours + ":" + minutes + ":" + seconds
//   clock.innerHTML = time
// }

// window.setInterval(checkTime, 1000);