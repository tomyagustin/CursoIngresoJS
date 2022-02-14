function mostrar()
{
	//tomo la edad  
	let edadIngresaada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresaada = parseInt(edadIngresada);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada > 17 && estadoCivil == "Soltero")

	{
	alert("Es soltero y no es menor");
	}		
	


}//FIN DE LA FUNCIÓN