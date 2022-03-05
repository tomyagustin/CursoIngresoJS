/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) ,
 el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let notaIngresada;
	let respuesta="si";
	let contadorMasculino=0;
	let contadorFemenino=0;
	let contadorAprobadosM=0;
	let contadorMenores=0;
	let contadorAdolescentes=0;
	let contadorMayores=0;
	let notasMenores=0;
	let notasAdolescentes=0;
	let notasMayores=0;
	let promedioMenores;
	let promedioMayores;
	let promedioAdolescentes;
	let sumaNotasM=0;
	let sumaNotasF=0;
	let promedioMasculino;
	let promedioFemenino;


	while(respuesta=="si")
	{
		nombreIngresado = prompt("Ingrese el nombre del estudiante");

		edadIngresada = parseInt(prompt("Ingrese la edad del estudiante"));
		while(edadIngresada<0 || edadIngresada >90)
		{
			edadIngresada = parseInt(prompt("ERROR, ingrese una edad valida"));
		}

		sexoIngresado = prompt("Ingrese el sexo del estudiante, f para femenino y m para masculino").toLowerCase();
		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("ERROR, ingrese un sexo valido, f para femenino y m para masculino").toLowerCase();
		}

		notaIngresada = parseInt(prompt("Ingrese la nota del final"));
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada = parseInt(prompt("ERROR, ingrese una nota valida, entre 0 y 10"));
		}

		// B , C Y D

		if (edadIngresada<13) 
		{
			contadorMenores = contadorMenores + 1;
			notasMenores = notasMenores + notaIngresada;
		}
		else
		{
			if (edadIngresada < 18) 
			{
				contadorAdolescentes = contadorAdolescentes + 1;
				notasAdolescentes = notasAdolescentes + notaIngresada;
			}
			else
			{
				if (edadIngresada>17) 
				{
					contadorMayores = contadorMayores + 1;
					notasMayores = notasMayores + notaIngresada;
				}
			}
		}

		// F
		if (sexoIngresado == "m") 
		{
			contadorMasculino = contadorMasculino + 1;
			sumaNotasM = sumaNotasM + notaIngresada;
			// A
			if (notaIngresada>3) 
			{
				contadorAprobadosM = contadorAprobadosM + 1; 
			}
		}
		else
		{
			contadorFemenino = contadorFemenino + 1;
			sumaNotasF = sumaNotasF + notaIngresada;
		}


		respuesta = prompt("desea seguir ingresando estudiantes?").toLowerCase();

	}

		promedioMenores = notasMenores / contadorMenores ;
		promedioAdolescentes = notasAdolescentes / contadorAdolescentes;
		promedioMayores = notasMayores / contadorMayores;


		promedioMasculino = sumaNotasM / contadorMasculino;
		promedioFemenino = sumaNotasF / contadorFemenino;


		mensaje = "La cantidad de varones aprobados es de " + contadorAprobadosM;
		mensaje = mensaje + ", el promedio de notas de los menores es de " + promedioMenores;
		mensaje = mensaje + ", el promedio de notas de los adolescentes es de " + promedioAdolescentes;
		mensaje = mensaje + ", el promedio de notas de los mayores es de " + promedioMayores;
		mensaje = mensaje + ", el promedio de notas de los hombres es de " + promedioMasculino;
		mensaje = mensaje + ", el promedio de notas de las mujeres es de " + promedioFemenino;

		document.write(mensaje);

}


