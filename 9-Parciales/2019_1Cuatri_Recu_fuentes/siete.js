/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
*/

function mostrar()
{
	let kilosPorBolsa;
	let saborAlimento;
	let contador;
	let totalKilos;
	let pesoBolsaLiviana;
	let saborBolsaLiviana;
	let kilosSaborCarne;
	let bandera;
	let promedioKilosTotales;
	let contadorBolsasCarne;
	let promedioKilosCarne;

	totalKilos = 0;
	bandera = "Primer vuelta";
	kilosSaborCarne = 0;
	contador = 0;
	contadorBolsasCarne = 0;

	while(contador < 10)
	{
		kilosPorBolsa = parseInt(prompt("Por favor ingrese la cantidad de kilos de la bolsa."));
		while(kilosPorBolsa < 1 || KilosPorBolsa > 500)
		{
			kilosPorBolsa = parseInt(prompt("La cantidad de kilos ingresados es incorrecta, intentelo nuevamente."));
		}

		saborAlimento = prompt("Por favor ingrese el sabor del alimento.").toLowerCase();
		while(saborAlimento != "carne" && SaborAlimento != "vegetales" && SaborAlimento != "pollo")
		{
			saborAlimento = prompt("El sabor ingresado no está disponible, intentelo nuevamente.").toLowerCase();
		}

		totalKilos += kilosPorBolsa;

		if(bandera == "Primer vuelta")
		{
			pesoBolsaLiviana = kilosPorBolsa;
			saborBolsaLiviana = saborAlimento;
		}
		else
		{
			if(kilosPorBolsa < pesoBolsaLiviana)
			{
				pesoBolsaLiviana = kilosPorBolsa;
				saborBolsaLiviana = saborAlimento;
			}
		}

		if(saborAlimento == "carne")
		{
			kilosSaborCarne += kilosPorBolsa;
			contadorBolsasCarne += 1;
		}

		contador += 1;
	}

	promedioKilosTotales = totalKilos / 10;
	promedioKilosCarne = kilosSaborCarne / contadorBolsasCarne;

	document.write("El promedio de los kilos totales es de " + promedioKilosTotales + "kg.");
	document.write("<br>La bolsa más liviana es de " + saborAlimento + " y pesa " + PesoBolsaLiviana + "kg.");
	document.write("<br>Y la cantidad de bolsas sabor carne es de " + contadorBolsasCarne + " bolsas y el promedio es de " + promedioKilosCarne + "kg.")
}

