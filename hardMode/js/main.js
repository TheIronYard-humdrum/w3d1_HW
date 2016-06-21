// //create div class=container
// //create h1 class=clock

// var clock = document.getElementById("time")
// clock.innerHTML = "BOO"
// color = "000000"

// var changeColor = function() {
//   color = String((Number(color) + 1))
//   while (color.length < 6) {
//     color = 0 + color
//   }
//   if (color == "1000000") {
//     color = "000000"
//   }
//   clock.innerHTML = ("#" + color)
//   document.querySelector("body").style.backgroundColor = ("#" + color)
// }

// window.setInterval(changeColor, 1000);

// var changeColor = function() {

// }






var background = document.querySelector("body");
var changeColor = function() {
  
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hexhours = hours.toString(16);
  hexmins = minutes.toString(16);
  hexsecs = seconds.toString(16);

  var clock = document.getElementById("time");
  var clockTime = hexhours + hexmins + hexsecs
  clock.innerHTML = clockTime;
  background.style.backgroundColor = "#" + hexhours + hexmins + hexsecs;
}



window.setInterval(changeColor, 1000);




































