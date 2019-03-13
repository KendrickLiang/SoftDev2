//Kendrick Liang
//SoftDev2 pd06
//K#09 -- Connect the Dots
//2019-03-13

var v = document.getElementById("vimage");
//var move = document.getElementById("move");
var clearall = document.getElementById("clear");
var oldy = -1;
var oldx = -1;

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  if (oldy != -1 & oldx != -1){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", oldx);
    c.setAttribute("cy", oldy);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "purple");
    v.appendChild(c);
  }
  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "purple");
  v.appendChild(c);
  oldx = x
  oldy = y
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
  oldy = -1;
  oldx = -1;
};


clearall.addEventListener('click', clear);
v.addEventListener('click', draw);
