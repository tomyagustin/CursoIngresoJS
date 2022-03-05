/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, 
un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:

a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/

function mostrar()
{
	let colorAuto;
	let valorAuto;
	let respuesta="si";
	let contadorRojos=0;
	let contadorRojosCaros=0;
	let contadorBaratos=0;
	let sumaValor=0;
	let contadorAutos=0;
	let banderaCaro="caro";
	let colorCaro;
	let valorCaro;
	let promedioAutos;
	let mensaje;

	while(respuesta=="si")
	{
		colorAuto = prompt("Ingrese el color del auto, rojo, verde o amarillo").toLowerCase();
		while(colorAuto != "rojo" && colorAuto != "verde" && colorAuto != "amarillo")
		{
			colorAuto = prompt("ERROR, ingrese un color valido, rojo, verde o amarillo").toLowerCase();
		}

		valorAuto = parseInt(prompt("Ingrese el valor del auto, hasta 10000"));
		while(valorAuto < 0 || valorAuto > 10000)
		{
			valorAuto = parseInt(prompt("ERROR, ingrese un precio valido, hasta 10000"));
		}

		// problema a
		if (colorAuto == "rojo") 
		{
			contadorRojos = contadorRojos + 1;
			// problema b
			if (valorAuto>5000) 
			{
				contadorRojosCaros = contadorRojosCaros + 1;
			}
		}

		// problema c
		if (valorAuto<5000) 
		{
			contadorBaratos = contadorBaratos + 1;
		}

		//problema d
		contadorAutos = contadorAutos + 1;
		sumaValor = sumaValor + valorAuto;

		//problema e
		if (banderaCaro=="caro") 
		{
			banderaCaro = "ya no";
			colorCaro = colorAuto;
			valorCaro = valorAuto;
		}
		else
		{
			if (valorAuto > valorCaro) 
			{
				colorCaro = colorAuto;
				valorCaro = valorAuto;
			}
		}

		respuesta = prompt("desea continuar ingresando autos?").toLowerCase();
	}

	promedioAutos = sumaValor / contadorAutos;

	mensaje = "La cantidad de autos rojos es de " + contadorRojos;
	mensaje = mensaje + ", la cantidad de rojos con precio mayor a 5000 es de  " + contadorRojosCaros;
	mensaje = mensaje + ", la cantidad de vehiculos con precio inferior a 5000 " + contadorBaratos;
	mensaje = mensaje + ", El promedio de todos los vehiculos ingresados es " + promedioAutos;
	mensaje = mensaje + ", El mas caro tiene un precio de  " + valorCaro +  " y su color  es " + colorCaro;

	document.write(mensaje);
}

