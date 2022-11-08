document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mouseup", dibujarMouse);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 0;
var y = 0;
var puntoinicial = false;



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
    var colorcito = "green";
    var movimiento1 = window.event.clientX;
    var movimiento2= window.event.clientY;
    dibujarLinea(colorcito,x,y,movimiento1,movimiento2,papel);
    y = movimiento1
    x = movimiento2
}
