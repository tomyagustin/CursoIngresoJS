/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("Ingresa f o m");

	while(sexoIngresado != "f" && sexoIngresado != "m")

{
	sexoIngresado = prompt("Reingrese f o m por favor");
}
	if (sexoIngresado == "f")
		{	
			sexoIngresado = "Femenino"
		}
	else
	{
			if	(sexoIngresado == "m")
		{
			sexoIngresado = "Masculino";
		}
	}


	document.getElementById("txtIdSexo").value= sexoIngresado;
}//FIN DE LA FUNCIÓN