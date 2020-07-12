gameStart();

function gameStart() {
  var startTime = new Date().getTime();
  shapeGenerator();
  document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var endTime = new Date().getTime();
    var executionTime = (endTime - startTime) / 1000;
    document.getElementById("time").innerHTML = executionTime + "s";
    Delay();
  };
}

function colorGenerator() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shapeGenerator() {
  var shapeSelector = Math.floor(Math.random() * 3);
  var top = Math.floor(Math.random() * 200 + 50);
  var left = Math.floor(Math.random() * 500 + 100);
  var sizeHeight = Math.floor(Math.random() * 200 + 50);
  var sizeWidth = Math.floor(Math.random() * 300 + 50);
  var color = colorGenerator();

  document.getElementById("shape").style.display = "block";
  if (shapeSelector == 0) {
    document.getElementById("shape").style.margin = top + "px " + left + "px";
    document.getElementById("shape").style.height = sizeHeight + "px";
    document.getElementById("shape").style.width = sizeHeight + "px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.borderRadius = 50 + "%";
  } else if (shapeSelector == 1) {
    document.getElementById("shape").style.margin = top + "px " + left + "px";
    document.getElementById("shape").style.height = sizeHeight + "px";
    document.getElementById("shape").style.width = sizeHeight + "px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.borderRadius = 0 + "%";
  } else {
    document.getElementById("shape").style.margin = top + "px " + left + "px";
    document.getElementById("shape").style.height = sizeHeight + "px";
    document.getElementById("shape").style.width = sizeWidth + "px";
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.borderRadius = 0 + "%";
  }
}

function Delay() {
  var randomDelay = Math.random() * 2000;
  setTimeout(gameStart, randomDelay);
}
