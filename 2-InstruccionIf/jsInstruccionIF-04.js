/*¨
if 4
Tomás Agustín Lo Sasso Greco
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
    let edadIngresada;
	
    edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt (edadIngresada);

	if(edadIngresada >= 12 && edadIngresada <= 17)
	
	/* //primera opcion
	if (edadIngresada > 13)
	{	
		if (edadIngresada < 17)
		*/

		{
			alert("Usted es adolescente");
		} 
	}//FIN DE LA FUNCIÓN