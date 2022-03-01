/*2.	Para el departamento de Construcción:
A.	Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let LargoTerreno;
let AnchoTerreno;
let AreaTerrenoRectangular;
let RadioTerreno;
let Perimetro;
let CantidadAlambre;
let BolsasCemento;
let BolsasCal;
let Mensaje;

function Rectangulo () 
{
	LargoTerreno = parseInt(document.getElementById('txtIdLargo').value);
	AnchoTerreno = parseInt(document.getElementById('txtIdAncho').value);

	Perimetro = LargoTerreno * 2 + AnchoTerreno * 2;

	CantidadAlambre = Perimetro * 3;

	Mensaje = "Para el perímetro será necesario " + CantidadAlambre;
	Mensaje = Mensaje + " metros de alambre.";

	alert(Mensaje);
}

function Circulo () 
{
	RadioTerreno = parseInt(document.getElementById('txtIdRadio').value);

	Perimetro = parseInt(RadioTerreno * 2 * 3.1416);

	CantidadAlambre = Perimetro * 3;

	Mensaje = "La cantidad de alambre necesario es de " + CantidadAlambre;
	Mensaje = Mensaje + " metros.";

	alert(Mensaje);
}

function Materiales () 
{
	LargoTerreno = parseInt(document.getElementById('txtIdLargo').value);
	AnchoTerreno = parseInt(document.getElementById('txtIdAncho').value);

	AreaTerrenoRectangular = LargoTerreno * AnchoTerreno;

	BolsasCemento = 2 * AreaTerrenoRectangular;

	BolsasCal = 3 * AreaTerrenoRectangular;

	Mensaje = "Para hacer un contrapiso en el terreno se necesitarán " + BolsasCemento;
	Mensaje = Mensaje + " bolsas de cemento y " + BolsasCal;
	Mensaje = Mensaje + " bolsas de cal."

	alert(Mensaje)
}