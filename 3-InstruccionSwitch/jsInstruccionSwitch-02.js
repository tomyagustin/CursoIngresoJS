/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)

{	

	case "Julio":
	case "Agosto":

	alert("Abrigate que hace frio");

	break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":

	alert("Falta para el invierno");

	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":

	alert("Ya pasamos el frio, ahora calor!!!");

	break;

}




}//FIN DE LA FUNCIÓN