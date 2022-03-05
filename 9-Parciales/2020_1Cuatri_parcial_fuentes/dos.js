/*
2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
*/

function mostrar()
{

  let nombreCorte;
  let precio;
  let pesoKg;
  let pesoTotal;
  let tipo;
  let respuesta;


while(respuesta == "si")
{
nombreCorte = prompt("Ingresa el nombre del corte");
precio = prompt("Ingresa el precio");
precio = parseInt(precio);
pesoKg = prompt("Ingresa el peso en kilogramos");
pesoKg = parseInt(pesokg);
tipo = prompt("Ingresa el tipo: hueso/sin hueso")
while(tipo != "hueso" && tipo != "sin hueso")
{
  tipo = prompt("Ingresa nuevamente una de las opciones")
}


pesoTotal = pesoTotal + pesoKg;
}









}



// https://www.onlinegdb.com/5FPhgEQ5F


































/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro


function mostrar()
{
  let productos;
  let cantidad;
  let precio;
  let precioDeBolsa;
  let precioBolsaCara;
  let acumuladorPrecio=0;
  let acumuladorCantidad=0;
  let tipoDeBolsaCara;
  let tipoDeBolsa=0;
  let contador=0;
  let contadorArena=0;
  let contadorCal=0;
  let contadorCemento=0;
  let descuento;
  let precioBruto=0;
  let precioConDescuento;
  let importe;
  let mensaje;
  let respuesta;
  let masUnidades;
  let resultado;
  let banderaPrecio = true;

  respuesta = "si";

  while(respuesta == "si")
  {
    productos = prompt(" Ingrese sus Productos ");
    while(productos != "arena" && productos != "cal" && productos != "cemento")
    {
      productos = prompt(" Error, Producto Ingresado no Valido reingrese un producto");
    }
      cantidad = parseInt(prompt(" Ingrese la cantidad de bolsas "));
      while(cantidad < 0)
      {
        cantidad = prompt(" Error, Cantidad Ingresada no valida, reingrese nuevamente");
      }
      precio = parseInt(prompt("Ingrese su Precio"));
      while(precio <0)
      {
        precio = prompt(" Error, precio ingresado no valido, reingrese nuevamente ");
      }
      if(banderaPrecio == true)
      {
        banderaPrecio = false;
        precioBolsaCara = precio;
        tipoDeBolsaCara = productos;
      }
      else
      {  
        if (precio > precioBolsaCara)
        {
          precioBolsaCara = precio;
          tipoDeBolsaCara = productos;
        }
      }
      
      if (productos == "arena") 
  {
    contadorArena = contadorArena + cantidad;
  }
  else
  {
    if (productos == "cal") 
    {
      contadorCal = contadorCal + cantidad;
    }
    else
    {
      if (productos =="cemento") 
      {
        contadorCemento = contadorCemento + cantidad;
      }
    }
  }
  
  switch(productos)
  {
    case "arena":
      contadorArena = contadorArena + cantidad;
    break;
    case "cemento":
      contadorCemento = contadorCemento + cantidad;
    break;
    case "cal":
      contadorCal = contadorCal + cantidad;
    break;
  }
    respuesta = prompt(" desea continuar? ");
    precioBruto= (precio *cantidad) + precioBruto;
  }
  if (cantidad > 30) 
  {
    descuento = 25;
  }
  else
  {
    if (cantidad > 10) 
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }
  }
  if (contadorCemento > contadorCal && contadorCemento > contadorArena) 
    {
      masUnidades = "cemento";
    }
    else
    {
      if (contadorArena > contadorCemento && contadorArena> contadorCal)  
    {
      masUnidades = "arena";
    }
    else
    {
      if (contadorCal > contadorArena && contadorCal> contadorCemento) 
      {
        masUnidades = "cal";
      }
    }
      precioConDescuento = precio - precio*(descuento/100);
      
      //precioBruto = acumuladorPrecio * acumuladorCantidad;
      //precioConDescuento = precioBruto * descuento/100;

      mensaje = "El precio Bruto es de "+precioBruto;
      if (descuento !=0) 
      {
          mensaje = mensaje +" y El precio Bruto con descuento es de "+descuento;
      }
          mensaje = mensaje+ " El tipo de bolsa con la mayor cantidad es "+masUnidades;
          mensaje = mensaje+ " El tipo de bolsa mas cara es de "+tipoDeBolsaCara;
          mensaje = mensaje + " El tipo de bolsa mas comprado es "+productos;
      alert(mensaje);
}
}
*/