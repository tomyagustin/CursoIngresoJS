/*
Tomás Agustín Lo Sasso Greco
e/s 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//en google funciona pero en otros no
//let num1;
//let num2;
//let resultado;


function sumar()
{	
	let num1;
    let num2;
    let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 + num2;
	
	alert ("la suma equivale a " + resultado);


}

function restar()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 - num2;
	
	alert ("la resta equivale a " + resultado);

}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 * num2;
	
	alert ("la multiplicación equivale a " + resultado);
}

function dividir()
{
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 / num2;
	
	alert ("la división equivale a " + resultado);
}


