function mostrar()
{
	/*
	//tomo la edad  
	let edadIngresaada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada < 18 && estadoCivil != "Soltero")

	{
	alert("Es pequeño para no ser soltero");
	}		
	*/

/*
Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
A.si es menor de 13 , mostrar el mensaje “feliz día”.
B.Si es adolescente el mensaje es “usted es adolescente”)
C.si tiene 17 años además mostrar el mensaje “último año!!!”
D.Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
E.si tiene 33 años , además mostrar el mensaje “como cristo”
F.si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
G.si tiene 88, además mostrar el mensaje “lindo número''
H.si la edad es par , además mostrar , “sos par!!
I.si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
J.si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
K.si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’
L.Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa
M.Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir)
N.Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’
*/

let edadIngresada;
let estadoCivil;
let mensaje;
let nombreIngresado;
let resto;

edadIngresada=parseInt(document.getElementById('txtIdEdad')).toLowerCase().value;
estadoCivil=document.getElementById('estadoCivil').value;
nombreIngresado=prompt("Ingrese nombre");

if(edadIngresada<13)
 
  {
	  mensaje=("Feliz dia.");
	  if (nombreIngresado=="Ricardo") 
	  {
		  mensaje=mensaje+" Muy chiquito para ese nombre ";
	  }
  }
  else
  {
	 if(edadIngresada<18) 
	 { 
		mensaje=("Usted es adolescente.");
		if (estadoCivil=="Divorciado") 
		{
			mensaje=mensaje+" Toda una vida por delante.";
		}
		if (nombreIngresado==" violeta") 
		{
		   mensaje=mensaje+" Como un color!!";
		}
		if (edadIngresada==17) 
		{
		   mensaje=mensaje + " , ultimo año!!!";
		}
		else
		{

		}
	 }
	 else
	 {
		 if (edadIngresada>=18) 
		 {
		   mensaje=("Tiene edad de laburar.");
		   if (estadoCivil="Soltero") 
		   {
			   mensaje=mensaje+" A salir.";
		   }
		   if (edadIngresada==33) 
		   {
				mensaje=mensaje+" Tiene la edad de cristo.";
		   }
		   else
		   {
			 if (edadIngresada>60) 
			 {
				 mensaje=mensaje+" A jubilarse!";
				 if (nombreIngresado=="Alfredo") 
				 {
					mensaje=mensaje+" como el de QUUEN";
				 }
				 if (edadIngresada==88) 
				 {
					 mensaje=mensaje+" lindo numero";
				 }
				 else
				 {

				 }
			 }
			 else
			 {

			 }
		   }
		 }
		 else
		 {

		 }
	 }
	 if (estadoCivil=="Casado") 
	 {
		 mensaje=mensaje+" casada quiere casa";
	 }
	 
  }
  
resto = edadIngresada % 2;
if(resto == 0)
{
	mensaje = mensaje + " y sos par";
}

alert(mensaje);
}//FIN DE LA FUNCIÓN



/* GB Q PASO OCTAVIO 
function mostrar()
{
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad= document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	nombre=prompt("Ingrese su nombre");

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad<13) //Ejercicio A
	{
		mensaje= "Feliz dia";

		if (nombre=="Ricardo") //Parte de ejercicio D
		{
			mensaje= mensaje + " / Muy chiquito para ese nombre";
		}
	}
	else
	{
		if (edad<18) //Ejercicio B
		{
			mensaje= "Usted es adolescente";

			if (edad ==17) 
			{
     			mensaje= mensaje +" / Ultimo año";
			}
			if (nombre=="Violeta") //Parte de ejercicio D
			{
				mensaje= mensaje + " / como un color!!";
			}
			if (estadoCivil=="Divorciado") //Ejercicio j
			{
				mensaje= mensaje + " / Toda una vida por delante";
			}
		}
		else //Ejercicio C
		{
			mensaje= "Tenes edad de laburar";

			if (edad==33) 
			{
				mensaje= mensaje + " / Como cristo";
			}
			if (estadoCivil=="Soltero") //Ejercicio i
			{
				mensaje= mensaje + " / a salir";
			}
			else
				if (edad>60) 
				{
					mensaje= mensaje+" / A jubilarse";

					if (edad==88) 
					{
						mensaje= mensaje+ " / Lindo número";
					}

					if (nombre=="Alfredo") //Parte de ejercicio D
					{
						mensaje = mensaje+ " / Como el de QUEEN";
					}
				}
		}
		if(estadoCivil=="Casado") //Ejercicio H
		{
			mensaje= mensaje + " /casada quiere casa";
		}
	}
	if(edad%2==0) //Ejercicio D
	{
		mensaje= mensaje+" / Es par";
	}

	alert(mensaje);
*/