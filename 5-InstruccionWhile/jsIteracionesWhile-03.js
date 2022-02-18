/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave."); //1ra parte
	
	while(claveIngresada!="utn750") //2da parte
{
	claveIngresada = prompt("error, reingrese el numero clave."); //3ra parte
}
alert("Bienvenido");
}//FIN DE LA FUNCIÓN
