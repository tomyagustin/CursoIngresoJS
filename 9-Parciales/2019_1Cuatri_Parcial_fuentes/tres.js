/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{   
    let precio;
    let porcentajeDescuento;
    let precioFinalDescuento;

    precio = prompt("Ingrese el precio por favor");
    precio = parseInt(precio);
    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioFinalDescuento = precio * porcentajeDescuento /100;
    precioFinalDescuento = precio - precioFinalDescuento;
    
    document.getElementById("elPrecioFinal").value=precioFinalDescuento;


}
