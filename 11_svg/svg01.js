//Kendrick Liang
//SoftDev2 pd06
//K#11 -- Ask Circles [Change || Die] ...While On The Go
//2019-03-18

var v = document.getElementById("vimage");
var clearall = document.getElementById("clear");
var moveall = document.getElementById("move");
var mystery = document.getElementById("?");
var requestID;
var node;
var rainbow = false;

var draw = function(e) {
  console.log(e);
  e.preventDefault();
  var x = e.offsetX;
  var y = e.offsetY;

  var isInCircle = false;
  var circleNode = null;
  v.childNodes.forEach(function(jnode){
	   //console.log(node);
     try{
       if ((Math.sqrt(Math.pow((jnode.cx.baseVal.value - x),2) + Math.pow((jnode.cy.baseVal.value - y),2))) <= 25){
         isInCircle = true;
        circleNode = jnode;
       }
     }
     catch(err){
       //console.log('first');
     }
  });

  if (isInCircle){
      if (circleNode.getAttribute('fill') == 'purple'){
        circleNode.setAttribute("fill", "green");
      }
      else {
        var rx = Math.floor(Math.random() * 501);
        var ry = Math.floor(Math.random() * 501);
        circleNode.setAttribute('cx', rx);
        circleNode.setAttribute('cy', ry);
        circleNode.setAttribute("fill", "purple");
      };
  }
  else {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", x);
      c.setAttribute("cy", y);
      c.setAttribute("r", 25);
      c.setAttribute('xdir', 0);
      c.setAttribute('ydir', 0);
      c.setAttribute("fill", "purple");
      v.appendChild(c);
  }
};

var clear = function(e) {
  while (v.lastChild) {
    v.removeChild(v.lastChild);
  }
  window.cancelAnimationFrame(requestID)
  rainbow = false;
};

var move = function(e) {
  window.cancelAnimationFrame(requestID)
  v.childNodes.forEach(function(node){
    try{
        if (rainbow){
          node.setAttribute('fill', getRandomColor());
        }
      	if ((node.cx.baseVal.value - 25) <= 0) {
      	    node.setAttribute('xdir', (node.getAttribute('xdir') + 1));
      	}
        else if ((node.cx.baseVal.value + 25) >= 500){
          node.setAttribute('xdir', (node.getAttribute('xdir') - 1));
        }
      	if ((node.cy.baseVal.value - 25) <= 0 ) {
      	    node.setAttribute('ydir', (node.getAttribute('ydir') + 1));
      	}
        else if ((node.cy.baseVal.value + 25) >= 500){
          node.setAttribute('ydir', (node.getAttribute('ydir') - 1));
        }
      	if (node.getAttribute('ydir') == 1){
      	    if (node.getAttribute('xdir') == 1){
      		node.setAttribute('cx', (node.cx.baseVal.value + 1));
      		node.setAttribute('cy', (node.cy.baseVal.value + 1));
      	    }
      	    else {
      		node.setAttribute('cx', (node.cx.baseVal.value - 1));
      		node.setAttribute('cy', (node.cy.baseVal.value + 1));
      	    }
      	}
    	else {
    	    if (node.getAttribute('xdir') == 1){
    		node.setAttribute('cx', (node.cx.baseVal.value + 1));
    		node.setAttribute('cy', (node.cy.baseVal.value - 1));
    	    }
    	    else {
    		node.setAttribute('cx', (node.cx.baseVal.value - 1));
    		node.setAttribute('cy', (node.cy.baseVal.value - 1));
    	    }
    	}
    }
  catch(err){
    //console.log('first');
    }

  });
  requestID = window.requestAnimationFrame(move);
};

var getRandomColor = function (e) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

clearall.addEventListener('click', clear);
moveall.addEventListener('click', move);
mystery.addEventListener('click', function(e){
  rainbow = !(rainbow);
});
v.addEventListener('click', draw);
