function mostrar()
{
    let edadIngresada;
	
    edadIngresada = document.getElementById("txtIdEdad").value;
    edadIngresada = parseInt (edadIngresada);

	if(edadIngresada <= 17)
    {
	alert("Usted es menor de edad");
    }

	if(edadIngresada >= 18)
	
	{	
	alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN