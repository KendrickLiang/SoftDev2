/*
  FireRed - Karen Li, Kendrick Liang
  SoftDev2 pd7
  K03 - They lock us in the tower whenever we get caught ...which is often
  2019-02-041-31
*/

var c = document.getElementById('playground');
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var ctx = c.getContext('2d');
var requestID;
var radius = 0;
var growing = true;
var clear = function(){
    ctx.clearRect(0,0,c.width,c.height);
    return true;
};
function animate(e){
    window.cancelAnimationFrame(requestID);
    clear();
    drawDot();
    requestID = window.requestAnimationFrame(animate);
}
var drawDot = function(){
    //check to see if circle grows or shrinks
    if (c.width / 2 == radius) {
        growing = false;
    }
    if (radius <= 0) {
        growing = true;
    }
    //draw the dot
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#00ffff";
    ctx.fill();
    //changes radius, making circle grow/shrink
    if (growing) {
        radius += 5;
    } 
    else {
        radius -= 5;
    }
}

var stopIt = function(){
    window.cancelAnimationFrame(requestID);
    console.log(requestID);
    //
}

dotButton.addEventListener("click", animate);
stopButton.addEventListener("click", stopIt);


/*
  DO NOT USE setTimeout() setInterval()

  DO USE window.requestAnimationFrame() -- only need one call in this project
  -executes on NEXT AVAILABLE screen repaint (ensures browser and hardware are ready)
  -pauses for background tabs, hidden frames etc
  -is automatically passed a timestamp to mark call time
  -returns a non-zero integer (can be used as an ID)
  -60 fps (target)
  -can be optimaized by browser (smoother animation)
  -more resource efficient (battery friendly)

  window.cancelAnimationFrame(id)
  -stops animation
*/


