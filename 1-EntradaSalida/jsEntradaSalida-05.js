/*
Tomás Agustin Lo Sasso Greco
ejercicio 05 bis
Debemos lograr tomar nombre, apellido (este por prompt) y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José,perez  y tiene 66 años"
*/

function mostrar()

/*

Tomás Agustín Lo Sasso Greco
es 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej. Usted se llama José y tiene 66 años
*/

function mostrar()
{	
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado=document.getElementById('txtIdNombre').value;
	edadIngresada=document.getElementById('txtIdEdad').value;

	Usted se llama José y tiene 66 años;

	 v1
	alert(Usted se llama José y tiene 66 años);
	alert(Usted se llama +nombreIngresado+ y tiene +edadIngresada+ años);
	

	 v2
	alert(Usted se llama José y tiene 66 años);

	mensaje=Usted se llama +nombreIngresado+ y tiene +edadIngresada+ años;
	
	alert(mensaje);

	 v3
	alert(Usted se llama José y tiene 66 años);

	mensaje=Usted se llama +nombreIngresado;
	mensaje=mensaje+  y tiene +edadIngresada;
	mensaje=mensaje+  años;
	
	alert(mensaje);
}




{
   let nombreIngresado;
   let apellidoIngresado;
   let edadIngresado;

   nombreIngresado=prompt('ingresa tu nombre');
   apellidoIngresado=prompt('ingresa tu apellido');
   edadIngresado=document.getElementById('txtIdEdad').value;

   alert("Usted se llama " +nombreIngresado +" "+apellidoIngresado+"  y tiene " +edadIngresado + " años");
}