/*¨
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
{
	
	case "Febrero":

	alert("Tiene 28 dias");

	break;

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":

	alert("Tiene 30 dias");

	break;

	default:

	alert("Tiene 31 dias");

	break;

}

}//FIN DE LA FUNCIÓ