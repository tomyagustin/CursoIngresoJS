function mostrar()
{
	let edadIngresada;
	
    edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);

	if(edadIngresada >17)

	{
	alert("Usted es Mayor de Edad");
	}
	
	else
	{
	if(edadIngresada >= 13 && edadIngresada <= 17)
	{
	alert ("Usted es Adolescente");
	}
	
	
	else
	{
	alert ("Usted no es Adolescente");
	}
}	
}//FIN DE LA FUNCIÓN