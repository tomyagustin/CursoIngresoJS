
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

function mostrar()
{
	var contador;
	var acumulador;
	let respuesta;
	let promedio;
	contador=0;
	acumulador=0;
	respuesta='si';
	while(respuesta == "si")
{
	numeroIngresado = prompt ("Ingrese un número por favor");
	numeroIngresado = parseInt(numeroIngresado);

	acumulador = acumulador + numeroIngresado; 
	contador = contador + 1;

	respuesta = prompt ("¿Desea continuar?");

}
	promedio = acumulador/contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN
*/

/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita el ingreso por prompt de
1-alturas en centimetros	(validar entre 0 y 250) ,
2-la edad (validar)
3-temperatura(validar)
4-el sexo(validar el sexo “f” o “m” o "nb")
5-nota (validar)
6-nombre de estudiantes de la UTN hasta que el usuario quiera.

1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.

	2da PARTE
	d)el primer alumno aprobado
	e)el nombre y edad de la máxima temperatura registrada 
	f)la altura y nota  del no binario mas joven

	3ra PARTE
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.
*/

//acumulador divido contador para el promedio

function mostrar() {
	//VARIABLES 
	let continuar;

	let altura;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;

	let contadorF;
	let contadorM;
	let contadorNB;
	let acumuladorEdadF;
	let acumuladorEdadM;
	let acumuladorEdadNB;

	let promedioEdadM;
	let promedioEdadF;
	let promedioEdadNB;
	let contadorConFiebre;
	let contadorSinFiebre;

	let miPrimerAlumnoAprobado;
	let nombreDelPrimerAprobado;
	let nombreDeLaMaximaTemp;
	let edadDeLaMaximaTemp;
	let banderaMaximaTemperatura;
	let temperaturaMaxima;
	let banderaNBmasJoven;
	let edadMasNBmasJoven;
	let alturaNBmasJoven;
	let notaNBmasJoven;
	let banderaFmasAlta;
	let alturaFmasAlta;
	let nombreFmasAlta;
	let porcentajeDesaprobados;
	let cantidadTotalDeAlumnos;
	let cantidadAprobados;
	let banderaDelMdesapBajo;
	let nombreDelMdesapBajo;

	//INICIALIZAR
	continuar = true;
	banderaNBmasJoven = true;
	banderaFmasAlta = true;
	miPrimerAlumnoAprobado = true;
	banderaMaximaTemperatura = true;
	banderaDelMdesapBajo = true;
	nombreDelPrimerAprobado = "";

	contadorF = 0;
	contadorConFiebre = 0;
	contadorSinFiebre = 0;
	acumuladorEdadF = 0;
	acumuladorEdadM = 0;
	acumuladorEdadNB = 0;
	cantidadTotalDeAlumnos = 0;
	cantidadAprobados = 0;

	//LOGICA
	while (continuar == true) 
	{
		altura = prompt("Dame una altura");
		altura = parseInt(altura);
		while (isNaN(altura) == true || altura < 0 || altura > 250)
		{
			altura = prompt("Error. Dame una altura");
			altura = parseInt(altura);
		}

		edad = prompt("Dame una edad");
		edad = parseInt(edad);
		while (isNaN(edad) == true || edad < 18) 
		{
			edad = prompt("Error. Dame una edad");
			edad = parseInt(edad);
		}

		temperatura = prompt("Dame una temperatura");
		temperatura = parseInt(temperatura);
		while (isNaN(temperatura) == true || temperatura < 35 || temperatura > 42) 
		{
			temperatura = prompt("Error. Dame una temperatura");
			temperatura = parseInt(temperatura);
		}

		sexo = prompt("Dame un sexo");
		sexo = sexo.toUpperCase(); // PASA TODO A MAYUSCULA
		//sexo = sexo.toLowerCase(); // PASA TODO A MINUSCULA
		while (sexo != "F" && sexo != "M" && sexo != "NB") 
		{
			sexo = prompt("Error. Dame un sexo");
			sexo = sexo.toUpperCase();
		}

		nota = prompt("Dame una nota");
		nota = parseInt(nota);
		while (isNaN(nota) == true || nota < 0 || nota > 10) 
		{
			nota = prompt("Error. Dame una nota");
			nota = parseInt(nota);
		}

		nombre = prompt("Dame un nombre");
		while (nombre == "") 
		{
			nombre = prompt("Error. Dame un nombre");
		}

		//contadorF = contadorF + 1;
		//acumuladorEdadF = acumuladorEdadF + edad;
		switch (sexo) 
		{
			case "M":
				contadorM++;
				acumuladorEdadM += edad;

				if (nota < 4) 
				{
					if (banderaDelMdesapBajo == true && altura < 160) 
					{
						nombreDelMdesapBajo = nombre;

						banderaDelMdesapBajo = false;
					}
				}
				break;

			case "F":
				contadorF++;
				acumuladorEdadF += edad;

				if (nota >= 4) 
				{
					if (banderaFmasAlta == true || altura > alturaFmasAlta) {
						alturaFmasAlta = altura;
						nombreFmasAlta = nombre;

						banderaFmasAlta == false;
					}
				}
				break;

			case "NB":
				contadorNB++;
				acumuladorEdadNB += edad;

				if (banderaNBmasJoven == true || edad < edadMasNBmasJoven) 
				{
					edadMasNBmasJoven = edad;
					alturaNBmasJoven = altura;
					notaNBmasJoven = nota;

					banderaNBmasJoven == false;
				}
				break;
		}

		if (temperatura > 37) 
		{
			//ACA TIENE FIEBRE
			contadorConFiebre++;
		} else {
			contadorSinFiebre++;
		}

		if (nota >= 4) 
		{
			//APROBADOS
			cantidadAprobados++;
			if (miPrimerAlumnoAprobado == true) 
			{
				nombreDelPrimerAprobado = nombre;
				miPrimerAlumnoAprobado = false;
			}
		} else 
		{
			//DESAPROBADOS
			cantidadDesaprobados++;
		}

		if (banderaMaximaTemperatura == true || temperatura > temperaturaMaxima) 
		{
			temperaturaMaxima = temperatura;
			nombreDeLaMaximaTemp = nombre;
			edadDeLaMaximaTemp = edad;

			banderaMaximaTemperatura == false;
		}

		cantidadTotalDeAlumnos++;
		//Esto es para seguir bucleando
		continuar = confirm("DESEA CONTINUAR?");
	}

	let mensaje = "";

	if (contadorM > 0) 
	{
		promedioEdadM = acumuladorEdadM / contadorM;
		mensaje += "El promedio de Edad de los masculinos es: " + promedioEdadM + "\n";
	}

	if (contadorF > 0) 
	{
		promedioEdadF = acumuladorEdadF / contadorF;
		mensaje += "El promedio de Edad de los femenino es: " + promedioEdadF + "\n";
	}

	if (contadorNB > 0) 
	{
		promedioEdadNB = acumuladorEdadNB / contadorNB;
		mensaje += "El promedio de Edad de los no binario es: " + promedioEdadNB + "\n";
	}

	porcentajeDesaprobados = (cantidadDesaprobados * 100) / cantidadTotalDeAlumnos;
	//INFORMAR
}