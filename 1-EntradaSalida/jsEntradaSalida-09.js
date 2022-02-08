/*
Tomás Agustín Lo Sasso Greco
e/s 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*function mostrarAumento()
{
	let importe;
	let aumento;
	let resultadoFinal;

	importe = document.getElementById("txtIdSueldo").value;

	importe = parseInt (importe);

    //primera opcion
	aumento = importe * 10/100;

	//segunda opcion
	//resultado = importe * 1.1

	resultadoFinal = aumento + importe;

	document.getElementById("txtIdResultado").value = resultadoFinal;

	alert (aumento);
}*/

function mostrarAumento()
{
/*Tomás Agustín Lo Sasso Greco
e/s 9 bis
lo anterior mas.
se debe pedir el % por prompt
*/

    let importe;
	let aumento;
	let resultadoFinal;

	importe = document.getElementById("txtIdSueldo").value;

	importe = parseInt (importe);

	aumento = prompt("Ingresa tu porcentaje");

	aumento = parseInt (aumento);

	resultadoFinal = importe * aumento /100;

    resultadoFinal = importe - resultadoFinal;

	alert ("El resultado final es  " + resultadoFinal + " y el aumento es del " + aumento + " y lo que usted ingreso " + importe);
    
}

//resultadoFinal = importe * 1.1

//txtIdSueldo
//txtIdResultado
