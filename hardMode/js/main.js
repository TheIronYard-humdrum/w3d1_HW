//create div class=container
//create h1 class=clock

var clock = document.getElementById("time")
clock.innerHTML = "BOO"
color = "999995"


var changeColor = function() {
  color = String((Number(color) + 1))
  while (color.length < 6) {
    color = 0 + color
  }
  if (color == "999999") {
    color = "000000"
  }
  clock.innerHTML = ("#" + color)
  document.querySelector("body").style.backgroundColor = ("#" + color)
}

window.setInterval(changeColor, 1000);