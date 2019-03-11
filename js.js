var div=document.getElementById('canvas');
var context= div.getContext('2d');
var pageWidth=document.documentElement.clientWidth;
var pageHeight=document.documentElement.clientHeight;
// var eraser=document.getElementById('eraser');
div.width=pageWidth;
div.height=pageHeight;
window.onresize=function () {
    var pageWidth=document.documentElement.clientWidth;
    var pageHeight=document.documentElement.clientHeight;
    div.width=pageWidth;
    div.height=pageHeight;
}

function drawCircle(x,y,radius) {
    context.beginPath();
    context.strokeStyle='black';
    context.arc(x,y,radius,0,Math.PI*2);
    context.fill()
};
var using=false;
var lastPoint={x:undefined,y:undefined};
div.onmousedown=function (a) {
    var x=a.clientX;
    var y=a.clientY;
    if (usingEraser){
        using=true;
        context.clearRect(x-5,y-5,10,10)
        // drawCircle(x,y,1)
    }else {
        using=true;
        lastPoint={'x':x,'y':y};
    }
};
div.onmousemove=function (a) {
    var x=a.clientX;
    var y=a.clientY;
    if (usingEraser){
        if (using){
            context.clearRect(x-5,y-5,10,10)
        }

    }else {
        if (using){

            var newPoint={'x':x,'y':y};
            // drawCircle(x,y,1);
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
            lastPoint=newPoint;
        }
    }

};
div.onmouseup=function (a) {
    using=false
};
function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle='black';
    context.moveTo(x1,y1);
    context.lineWidth=5;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath()
};
var usingEraser=false;
eraser.onclick=function () {
    usingEraser=!usingEraser;
}
