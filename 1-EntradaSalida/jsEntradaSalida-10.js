/*
Tomás Agustín Lo Sasso Greco
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


/*
function mostrarAumento()
{
	let numeroImporte;
	let descuento;
	let resultado;

	numeroImporte = document.getElementById("txtIdImporte").value;
	numeroImporte = parseInt(numeroImporte);

	descuento = numeroImporte * 25/100;

	resultado = descuento + numeroImporte;

	resultado = numeroImporte - descuento;

	document.getElementById("txtIdResultado").value=resultado;
}*/


/*
Tomás Agustín Lo Sasso Greco
e/s 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
tomar el descuento por prompt y mostrar el resultado concatenado por alert
ejemplo "su monto total es 750 y se le hizo un descuento del 25% usted ingreso 1000"
*/

function mostrarAumento()
{
	let montoIngresado;
	let porcentajeDescuento;
	let descuento;
	let montoTotal;

	montoIngresado = document.getElementById("txtIdImporte").value;
	montoIngresado = parseInt(montoIngresado);

	porcentajeDescuento = prompt("Ingresa el descuento");
    porcentajeDescuento = parseInt (porcentajeDescuento);

    descuento = montoIngresado * porcentajeDescuento /100;
    montoTotal = montoIngresado - descuento;


    alert (" su monto total es " + montoTotal + " le hizo un descuento del "+ porcentajeDescuento + " y usted ingreso " + montoIngresado);

}

//monto ingresado
//porcentaje de descuento q se hizo
//descuento q se hizo
//monto total