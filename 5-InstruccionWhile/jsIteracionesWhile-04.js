/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado >10 || numeroIngresado <0)
{
	numeroIngresado = prompt ("Reingrese un numero entre el 0 y 10 por favor");
}
	document.getElementById = ("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN