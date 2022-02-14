/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)

	{

	case "Bariloche":
	case "Ushuaia":

	alert ("FRIO");

	break;

	case "Mar del plata":
	case "Cataratas":

	alert("CALOR");	

	break;

}
}//FIN DE LA FUNCIÓN