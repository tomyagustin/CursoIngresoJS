/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


let num1;
let num2;
let resultado;


function sumar()
{	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 + num2;
	
	alert ("la suma equivale a " + resultado);


}

function restar()
{
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 - num2;
	
	alert ("la resta equivale a " + resultado);

}

function multiplicar()
{ 
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 * num2;
	
	alert ("la multiplicación equivale a " + resultado);
}

function dividir()
{
	num1 = document.getElementById("txtIdNumeroUno").value;
	num1 = parseInt (num1);

	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt (num2);

	resultado = num1 / num2;
	
	alert ("la división equivale a " + resultado);
}


