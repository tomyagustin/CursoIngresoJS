/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let contador;
	let bandera;
	let precioAlcoholBarato;
	let unidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let totalBarbijos;
	let totalJabones;
	let totalAlcoholes;
	let precioTotalJabones;
	let precioTotalBarbijos;
	let precioTotalAlcoholes;
	let promedio;
	let mensaje1;
	let mensaje2;
	let mensaje3;

	contador = 0;
	tipo = "";
	precio = 0;
	unidades = 0;
	totalJabones = 0;
	fabricanteAlcoholBarato = "No existe";
	precioAlcoholBarato = 0;
	unidadesAlcoholBarato = 0;
	precioTotalJabones = 0;
	precioTotalBarbijos = 0;
	precioTotalAlcoholes = 0;
	bandera = "primer alcohol";

	while(contador < 5)
	{
		tipo = prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol.").toLowerCase();

		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
		{
			tipo = prompt("El tipo de producto no existe, intentelo nuevamente.").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio del producto (entre $100 y $300)."));

		while(precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("El precio no está dentro del rango, por favor intentelo nuevamente."));
		}

		unidades = parseInt(prompt("Ingrese la cantidad de unidades del producto (entre 1 y 1000)"));

		while(unidades < 1 || unidades > 1000)
		{
			unidades = parseInt(prompt("La cantidad de unidades no está dentro del rango especificado, por favor intentelo nuevamente"));
		}

		marca = prompt("Ingrese la marca del producto.");

		fabricante = prompt("Ingrese el nombre del fabricante.");

		if(tipo == "alcohol")
		{
			if(bandera == "Primer alcohol")
			{
				precioAlcoholBarato = precio;
				bandera = "";
			}
			else
			{
				if(precio < precioAlcoholBarato)
				{
					precioAlcoholBarato = precio;
					unidadesAlcoholBarato = unidades;
					fabricanteAlcoholBarato = fabricante;
				}
			}
		}

		if(tipo == "jabon")
		{
			totalJabones = totalJabones + unidades;
			precioTotalJabones = precioTotalJabones + precio * unidades;
		}
		else
		{
			if(tipo == "barbijo")
			{
				totalBarbijos = totalBarbijos + unidades;
				precioTotalBarbijos = precioTotalBarbijos + precio * unidades;
			}
			else
			{
				totalAlcoholes = totalAlcoholes + unidades;
				precioTotalAlcoholes = precioTotalAlcoholes + precio * unidades;
			}
		}

		contador = contador + 1;
	}

	mensaje1 = "El alcohol más barato vale: $" + precioAlcoholBarato;
	mensaje1 = mensaje1 + ", la cantidad de unidades es de: " + unidadesAlcoholBarato;
	mensaje1 = mensaje1 + " y el fabricante es: " + fabricanteAlcoholBarato + ".";

	if(totalJabones > totalBarbijos && totalJabones > totalAlcoholes)
	{
		promedio = precioTotalJabones / totalJabones;
	}
	else
	{
		if(totalBarbijos > totalJabones && totalBarbijos > totalAlcoholes)
		{
			promedio = precioTotalBarbijos / totalBarbijos;
		}
		else
		{
			promedio = precioTotalAlcoholes / totalAlcoholes;
		}
	}

	mensaje2 = "El promedio por compra del tipo con más unidades es de: $" + promedio;

	mensaje3 = "La cantidad de unidades de jabones es de: " + totalJabones;

	document.write(mensaje1);
	document.write("<br>" + mensaje2);
	document.write("<br>" + mensaje3);
}
