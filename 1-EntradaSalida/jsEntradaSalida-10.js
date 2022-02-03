/*
Tomás Agustín Lo Sasso Greco
e/s 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
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
}
