/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let mensaje;
	let respuesta;
	let maxTemperaturaGuardada;
	let personaGuardada;
	let solteroViudo;
	let contadorMayorViudo;
	let contadorTemperatura;
	let contadorSoltero;
	let contadorViudo;
	let edadSolteros;
	let promedioEdadSolteros;

	let banderaMasTemperatura;

	banderaMasTemperatura=1;
	respuesta="si";
	contadorMayorViudo=0;
	contadorTemperatura=0;
	contadorSoltero=0;
	contadorViudo=0;
	edadSolteros=0;
	promedioEdadSolteros=0;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese un nombre:");

		edad=prompt("Ingrese su edad:");

		while(isNaN(edad) || edad<0 || edad>100)
		{
			edad=prompt("Ingrese una edad valida:");
		}

		edad=parseInt(edad);

		sexo=prompt("Ingrese sexo f o m:");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese un sexo valido (f o m)");
		}

		estadoCivil=prompt("Ingrese estado civil (soltero, casado o viudo)");

		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Ingrese un estado civil valido (soltero, casado o viudo)");
		}

		temperaturaCorporal=prompt("Ingrese temperatura corporal");

		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal=prompt("Ingrese una temperatura corporal valida:");
		}

		temperaturaCorporal=parseInt(temperaturaCorporal);

		respuesta=prompt("Desea ingresar otro pasajero? si/no");

		if(banderaMasTemperatura==1)
		{
			banderaMasTemperatura=0;
			maxTemperaturaGuardada=temperaturaCorporal;
			personaGuardada=nombre;
		}
		else
		{
			if(temperaturaCorporal>maxTemperaturaGuardada)
			{
				maxTemperaturaGuardada=temperaturaCorporal;
				personaGuardada=nombre;
			}
		}

		if(edad>17)
		{
			if(estadoCivil=="viudo")
			{
				contadorMayorViudo=contadorMayorViudo+1;
			}
		}

		if(edad>60)
		{
			if(temperaturaCorporal>38)
			{
				contadorTemperatura=contadorTemperatura+1;
			}
		}

		switch(sexo)
		{
			case "m":
				switch(estadoCivil)
				{
					case "soltero":
						contadorSoltero = contadorSoltero + 1;
						edadSolteros=edadSolteros+edad;
					break;
					case "viudo":
						contadorViudo = contadorViudo + 1;
					break;
				}
			break;
		}


	}

	solteroViudo = contadorSoltero + contadorViudo;

	if(promedioEdadSolteros==0)
	{
		promedioEdadSolteros=0;
	}
	else
	{
		promedioEdadSolteros = edadSolteros/contadorSoltero;
	}
	

	mensaje="El nombre de la persona con mas temperatura es "+personaGuardada+" con "+maxTemperaturaGuardada+" grados."+
	"<br>La cantidad de personas mayores de edad viudos son: "+contadorMayorViudo+"<br>La cantidad de hombres que hay solteros o viudos son: "+
	solteroViudo+"<br>La cantidad de personas de tercera edad con mas de 38 grados de temperatura son: "+contadorTemperatura+
	"<br>El promedio de edad de los hombres solteros es: "+promedioEdadSolteros;

	document.write(mensaje);
}
