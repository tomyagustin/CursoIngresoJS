/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	
	contador=0;
	acumulador=0;

	while(contador<5)

	{

		numeroIngresado = prompt("Ingresa un número por favor");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado; 
		contador = contador +1;

	}

	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN