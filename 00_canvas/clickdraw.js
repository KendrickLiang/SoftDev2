//Kendrick Liang
//SoftDev2 pd6
//K#00 -- I See a Red Door...
//2019-01-31
var canvas=document.getElementById("slate");
var clear=document.getElementById("clearall");
var rectangle=document.getElementById("rectangle");
var dot=document.getElementById("dot");
var ctx=canvas.getContext("2d");
var isBox=true;

clear.addEventListener(
    "click",
    function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
)
canvas.addEventListener(
    "click",
    function(e){
        console.log(e);
        var r=canvas.getBoundingClientRect();
        if(isBox){
           ctx.fillRect(e.pageX-r.left,e.pageY-r.top,1,1);
        }
        else{
            console.log(e.pageX-r.left);
            ctx.beginPath();
            ctx.ellipse(e.pageX-r.left,e.pageY-r.top,1,1,0, 0, 2 * Math.PI);
            ctx.fill()
            ctx.stroke();
        }
    }
)
dot.addEventListener(
    "click",
    function(){
        isBox=false;
        rectangle.removeAttribute("hidden");
        dot.setAttribute("hidden",true);
    }
)
rectangle.addEventListener(
    "click",
    function(){
        isBox=true;
        dot.removeAttribute("hidden");
        rectangle.setAttribute("hidden",true);
    }
)