/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero por favor");
		numeroIngresado = parseInt(numeroIngresado);
		contador = +1;

	if(banderaDelPrimero == "es el primero")
	{
	banderaDelPrimero = "x";
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;
	}
	else
	{
		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{	
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
	}	
	respuesta=prompt("Usted desea seguir ingresando números?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN