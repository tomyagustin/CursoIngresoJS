/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	let respuesta;
	let promedio;
	contador=0;
	acumulador=0;
	respuesta='si';
	while(respuesta == "si")
{
	numeroIngresado = prompt ("Ingrese un número por favor");
	numeroIngresado = parseInt(numeroIngresado);

	acumulador = acumulador + numeroIngresado; 
	contador = contador + 1;

	respuesta = prompt ("¿Desea continuar?");

}
	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN