/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)

{

	case "Bariloche":

	alert ("Oeste");

	break;

	case "Ushuaia":

	alert("Sur");

	break;

	case "Mar del plata":

	alert ("Este");

	break;

	case "Cataratas":

	alert ("Norte");

	break;

}
}//FIN DE LA FUNCIÓN