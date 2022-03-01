/*
Una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad 
para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
let destinoIngresado;
let estacionIngresada;
let descuentoAumento;
let costoViaje;

costoViaje = 15000;
destinoIngresado = document.getElementById('txtIdDestino').value;
estacionIngresada = document.getElementById('txtIdEstacion').value;

switch(destinoIngresado)
{
	case "Bariloche":
	switch(estacionIngresada)
	{
		case "Invierno":
		descuentoAumento = -20;
		break;

		case "Verano":
		descuentoAumento = 20;
		break;

		case "Otoño":
		case "Primavera":
		descuentoAumento = 10;
		break;
	}
	break;

	case "Cataratas":
	switch(estacionIngresada)
	{
		case "Invierno":
		descuentoAumento = -10;
		break;

		case "Verano":
		descuentoAumento = 10;
		break;

		case "Otoño":
		case "Primavera":
		descuentoAumento = 10;
		break;
	}
	break;

	case "Cordoba":
	switch(estacionIngresada)
	{
		case"Invierno":
		descuentoAumento = -10;
		break;

		case "Verano":
		descuentoAumento = 10;
		break;

		case "Otoño":
		case "Primavera":
		descuentoAumento = 0;
		break;
	}
	break;

	case "Mar del plata":
	switch(estacionIngresada)
	{
		case "Invierno":
		descuentoAumento = 20;
		break;

		case "Verano":
		descuentoAumento = 20;
		break;

		case "Otoño":
		case "Primavera":
		descuentoAumento = 10;
		break;
	}
	break;
}
costoViaje = costoViaje + (descuentoAumento/100*costoViaje);
alert("el precio del viaje es " +costoViaje);

}//FIN DE LA FUNCIÓN