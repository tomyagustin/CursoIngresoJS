function mostrar()
{
	/*
	//tomo la edad  
	let edadIngresaada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivil != "Soltero")

	{
	alert("Es pequeño para no ser soltero");
	}		
	*/

	let edadIngresada;
	let nombreIngresado;
	let mensaje;
	let numeroPar;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);
	nombreIngresado = prompt("Ingresa tu nombre");

	if(edadIngresada < 13) // A
	{
		mensaje = "Feliz día";
	}
	else
	{
			if(edadIngresada <18) // B
		{
				mensaje = mensaje + "Usted es adolescente";
		}
			if(edadIngresada == 17)
		{
				mensaje = mensaje + " y es su ultimo año";
	}
	
	else
	{
			if(edadIngresada == 17)
		{
				mensaje = mensaje + "Tenes edad de laburar";
		}

	else
	{
			if(edadIngresada == 33) // C
			{
				mensaje = mensaje + "como cristo";
			}
	else 
			{	
			if(edadIngresada >60)
			{
				mensaje = mensaje + "A jubilarse";
			}
	else
		{
			if(edadIngresada == 88)
			{
				mensaje = mensaje + "lindo numero";
			}		
		}
      }
	}
}	
	numeroPar = edadIngresada % 2;
	if(numeroPar == 0)
	{
	mensaje = mensaje + " y sos par!!";
	}
	
	alert(mensaje);
}
}//FIN DE LA FUNCIÓN



/* GB Q PASO OCTAVIO 
function mostrar()
{
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad= document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	nombre=prompt("Ingrese su nombre");

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<13) //Ejercicio A
	{
		mensaje= "Feliz dia";

		if (nombre=="Ricardo") //Parte de ejercicio D
		{
			mensaje= mensaje + " / Muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad<18) //Ejercicio B
		{
			mensaje= "Usted es adolescente";

			if (edad ==17) 
			{
     			mensaje= mensaje +" / Ultimo año";
			}
			if (nombre=="Violeta") //Parte de ejercicio D
			{
				mensaje= mensaje + " / como un color!!";
			}
			if (estadoCivil=="Divorciado") //Ejercicio j
			{
				mensaje= mensaje + " / Toda una vida por delante";
			}
		}
		else //Ejercicio C
		{
			mensaje= "Tenes edad de laburar";

			if (edad==33) 
			{
				mensaje= mensaje + " / Como cristo";
			}
			if (estadoCivil=="Soltero") //Ejercicio i
			{
				mensaje= mensaje + " / a salir";
			}
			else
				if (edad>60) 
				{
					mensaje= mensaje+" / A jubilarse";

					if (edad==88) 
					{
						mensaje= mensaje+ " / Lindo número";
					}

					if (nombre=="Alfredo") //Parte de ejercicio D
					{
						mensaje = mensaje+ " / Como el de QUEEN";
					}
				}
		}
		if(estadoCivil=="Casado") //Ejercicio H
		{
			mensaje= mensaje + " /casada quiere casa";
		}
	}
	if(edad%2==0) //Ejercicio D
	{
		mensaje= mensaje+" / Es par";
	}

	alert(mensaje);
*/