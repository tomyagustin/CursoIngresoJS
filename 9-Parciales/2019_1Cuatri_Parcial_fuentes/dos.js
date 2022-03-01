/*
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
  let nombre1;
  let nombre2;
  let pesoTotal;
  let peso1;
  let peso2;
  let promedio;
  
  nombre1 = prompt("Ingrese su nombre");
  nombre2 = prompt ("Ingrese su nombre");
  peso1 = prompt ("Ingrese su peso");
  peso2 = prompt ("Ingrese su peso");
  peso1 = parseInt(peso1);
  peso2 = parseInt(peso2);
  
  pesoTotal = peso1 + peso2;
  promedio = pesoTotal /2 

  alert("Ustedes se llaman " +nombre1 + " y " +nombre2 + " y pesan " + peso1 + " y " +peso2 + " que sumados son " + pesoTotal + " el promedio de peso es de " +promedio);

}
