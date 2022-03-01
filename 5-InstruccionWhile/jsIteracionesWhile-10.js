/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var mensaje;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número por favor");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado >0)
		{
			cantidadPositivos = cantidadPositivos +1;
			sumaPositivos = sumaPositivos + numeroIngresado +1; 
		}
		else
		{
			cantidadNegativos = cantidadNegativos -1;
			sumaNegativos = sumaNegativos -1;
		}
		else
		{
			{
				if()
			}
		}

		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN