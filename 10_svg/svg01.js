//Kendrick Liang
//SoftDev2 pd06
//K#10 -- Ask Circles [Change || Die]
//2019-03-14

var v = document.getElementById("vimage");
var clearall = document.getElementById("clear");

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  var isInCircle = false;
  var circle_node = null;
  console.log(v);
  v.childNodes.forEach(function(node){
	   //console.log(node);
     try{
       if ((Math.sqrt(Math.pow((node.cx.baseVal.value - x),2) + Math.pow((node.cy.baseVal.value - y),2))) <= 15){
        isInCircle = true;
        circle_node = node;
       }
     }
     catch(err){
       console.log('first');
     }
  });

  if (isInCircle){
      if (circle_node.getAttribute('fill') == 'purple'){
        circle_node.setAttribute("fill", "green");
      }
      else {
        var rx = Math.floor(Math.random() * 501);
        var ry = Math.floor(Math.random() * 501);
        circle_node.setAttribute('cx', rx);
        circle_node.setAttribute('cy', ry);
        circle_node.setAttribute("fill", "purple");
      };
  }
  else {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 15);
      c.setAttribute("fill", "purple");
      v.appendChild(c);
  }
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
};


clearall.addEventListener('click', clear);
v.addEventListener('click', draw);
