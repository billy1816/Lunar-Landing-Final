var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var alt = 69.15;
var x = 69.15;
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var fuel=100;

//al cargar por completo la página...
window.onload = function ()
{
	//definición de eventos
    //mostrar menú móvil
    document.getElementById("showm").onclick = function ()
    {
        document.getElementsByClassName("c")[0].style.display = "block";
        document.getElementById("showm").innerHTML = "";
		stop();
	}
	//ocultar menú móvil
    document.getElementById("hidem").onclick = function ()
    {
	    document.getElementsByClassName("c")[0].style.display = "none";
	    document.getElementById("showm").innerHTML = "show menu";

		start();
	}
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover nave
	start();

}

//Definición de funciones
	function start()
	{
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
    v += a*dt;
    vel = v.toFixed(2);
	document.getElementById("velocidad").innerHTML=vel;
	y += v*dt;
	x -= v*dt;
	alt = x.toFixed(2);
	document.getElementById("altura").innerHTML= alt;
	
	//mover hasta que top sea un 79% de la pantalla
	if (y < 79)
	{
		document.getElementById("nau").style.top = y+"%"; 
	} else { 
	    stop(); aterratge();
	}
}
function aterratge() {
    if (v <= 5) {
        alert("Enhorabona, bon aterratge!");
        document.onkeydown = null;
        document.onkeyup = null;
    }
    else {
        document.onkeydown = null;
        document.onkeyup = null;
        document.getElementById("nav").src = "img/boom.gif"
        setTimeout(func, 1500);
        function func() {
            alert("Has perdut, fes click a Inicio juego per tornar a intentar-ho");
            document.onkeydown = null;
            document.onkeyup = null;
        }
       
    }
}
    function motorOn(){
        a=-g;
        if (timerFuel==null)
            timerFuel = setInterval(function () { actualizarAltura(); }, 100);
        document.getElementById("nav").src = "img/Capa 2.png";

    }
    function motorOff(){
        a=g;
        clearInterval(timerFuel);
        timerFuel = null;
        document.getElementById("nav").src = "img/nau.png";

    }
    function actualizarAltura()
    {
        //Aquí hay que cambiar el valor del marcador de Fuel...
        if (alt>0)
        {
            if (fuel>0)
            {
                fuel-=1;
                document.getElementById("fuel").innerHTML=fuel;
            }
            else
            {
                finaljoc();
            }
        }
        else
        {
            finaljoc();
            aterratge();
        }
    }

    function finaljoc()
    {
        motorOff();
        document.onkeydown = null;
        document.onkeyup = null;
    }