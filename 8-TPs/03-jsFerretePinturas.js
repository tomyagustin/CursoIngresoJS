/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let ingresarTemperatura;
	let resultadoConversión;
	let mensaje;

	ingresarTemperatura = document.getElementById("txtIdTemperatura").value;
	ingresarTemperatura = parseFloat(ingresarTemperatura);

    resultadoConversión = (ingresarTemperatura -32) * 5/9;

    mensaje = "La temperatura de " + ingresarTemperatura + " Grados Fahrenheint son " + resultadoConversión + " Grados Centigrados ";

    alert (mensaje);

}

function CentigradosFahrenheit () 
{
	let ingresarTemperatura;
	let resultadoConversión;
	let mensaje;

	ingresarTemperatura = document.getElementById("txtIdTemperatura").value;
	ingresarTemperatura = parseFloat(ingresarTemperatura);

    resultadoConversión = (ingresarTemperatura *9/5) +32;

    mensaje = "La temperatura de " + ingresarTemperatura + " Grados Centigrados son " + resultadoConversión + " Grados Fahrenhein ";

    alert (mensaje);
}


//32 °F − 32) × 5/9 = 0 °C
//( °C × 9/5) + 32