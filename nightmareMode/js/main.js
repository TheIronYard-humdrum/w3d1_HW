//create div class=container
//create h1 class=clock

var clock = document.getElementById("time")

var changeColor = function() {
  var time = new Date();
  time = Number(time).toString(16);
  color = time.slice(5, 11)
  clock.innerHTML = ("#" + color)
  document.querySelector("body").style.backgroundColor = ("#" + color)
}

window.setInterval(changeColor, 1000);