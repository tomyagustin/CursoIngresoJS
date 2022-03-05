/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Tomás Agustín Lo Sasso Greco
tp 4 A,B,C,D
 
function CalcularPrecio () /*
{ // IF + IF

 	let numeroLamparitas;
    let descuento;
    let precio;
    let precioFinal;
    let marca;
    let IIBB;

    numeroLamparitas = document.getElementById("txtIdCantidad").value;
    numeroLamparitas = parseInt(numeroLamparitas);

    marca = document.getElementById("Marca").value;

    precio = numeroLamparitas * 35;

    descuento = 0

        if(numeroLamparitas > 5)
    {
        descuento = 50;
    }
    
    else 
    {
        if (numeroLamparitas == 5 && marca == "ArgentinaLuz")
        
        {
            descuento = 40;
        }
        else
        {   
            descuento = 30;
        }
    }
        if(numeroLamparitas == 4 && marca == "Argentinaluz" || "FelipeLamparas")

        { 
            descuento = 25;
        }
        else
        {
            descuento = 20;
        }

        if (numeroLamparitas == 3 && marca == "ArgentinaLuz")

        {
            descuento = 15;
        }
        else
        {   

            if  (marca == "FelipeLamparas")
        
            {   
                descuento = 10;
            }   
           
            else
            {   
                descuento = 5;
            }
        } 

    precioFinal = precio - precio * descuento /100;

    if(precioFinal > 120)
        
    { 

    IIBB = precioFinal * 10/100;

    precioFinal = precioFinal + IIBB

    alert("Usted pago " +IIBB +" de IIBB");

    }
    
    
    document.getElementById("txtIdprecioDescuento").value=precioFinal;
    
} */

/*
function CalcularPrecio ()
{  // IF + SWITCH

    let numeroLamparitas;
    let descuento;
    let precio;
    let precioFinal;
    let marca;
    let IIBB;

    numeroLamparitas = document.getElementById("txtIdCantidad").value;
    numeroLamparitas = parseInt(numeroLamparitas);

    marca = document.getElementById("Marca").value;


    precio = numeroLamparitas * 35;

    descuento = 0

    if(numeroLamparitas >5)
    {
        descuento = 50;
    }
    
    else 
    {
        if (numeroLamparitas == 5)
    {
        switch(marca)
        {
            case "ArgentinaLuz":
            descuento = 40;
            break;
            default:
            descuento = 30;
            break;
        }
    }

    else
    {   

        if(numeroLamparitas == 4)
    {   
        switch(marca)
        { 
            case "ArgentinaLuz":
            case "FelipeLamparas":
            descuento = 25;
            break;

            default:
            descuento = 20;
            break;
        }
    }

    else 
    {
        if(numeroLamparitas == 3)
    {
        switch(marca)
        {
    
            case "ArgentinaLuz":
                
            descuento = 15;
            break;

            case "FelipeLamparas":
            descuento = 10;
            break; 

            default:
            descuento = 5;
            break;
    }  
        } 
    }

    precioFinal = precio - precio * descuento /100;

    if(precioFinal > 120 )

    { 

    IIBB = precioFinal * 10/100;
    
    precioFinal = precioFinal + IIBB

    alert("Usted pago " +IIBB +" de IIBB");

    }


document.getElementById("txtIdprecioDescuento").value=precioFinal;

}

    }

} */

/*
function CalcularPrecio ()
{ // SWITCH + IF

    let numeroLamparitas;
    let descuento;
    let precio;
    let precioFinal;
    let marca;
    let IIBB;

    numeroLamparitas = document.getElementById("txtIdCantidad").value;
    numeroLamparitas = parseInt(numeroLamparitas);

    marca = document.getElementById("Marca").value;

    precio = numeroLamparitas * 35;

    descuento = 0

    switch (numeroLamparitas)

    {

        case 6:
        descuento = 50;
        break;

        case 5:
        descuento = 40;
        if(marca == "FelipeLamparas")
        {
            descuento = 30;
        }
        break;

        case 4:
        descuento = 20;
        if(marca == "ArgentinaLuz" && "FelipeLamparas")
        {
            descuento = 25;
        }
        break;

        case 3:
        default:
        descuento = 5;
        if(marca == "ArgentinaLuz")
        {
            descuento = 15;
        }
        if(marca == "FelipeLamparas")
        {
        descuento = 10;
        }
        break;
    }
    
    
    precioFinal = precio - precio * descuento /100;   

    if(precioFinal > 120 )


    { 

    IIBB = precioFinal * 10/100;
    
    precioFinal = precioFinal + IIBB

    alert("Usted pago " +IIBB +" de IIBB");

    }


document.getElementById("txtIdprecioDescuento").value=precioFinal;

} */

function CalcularPrecio ()
{ // switch + switch 

    let numeroLamparitas;
    let descuento;
    let precio;
    let precioFinal;
    let marca;
    let IIBB;

    numeroLamparitas = document.getElementById("txtIdCantidad").value;
    numeroLamparitas = parseInt(numeroLamparitas);

    marca = document.getElementById("Marca").value;

    precio = numeroLamparitas * 35;

    descuento = 0

    switch(numeroLamparitas)
 	{
 		case 5:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			descuento = 40;
 			break;

 			default:
 			descuento = 30;
 			break;
 		}
 		break;

 		case 4:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			case "FelipeLamparas":
 			descuento = 25;
 			break;

 			default:
 			descuento = 20;
 			break;
 		}
 		break;

 		case 3:
 		switch(marca)
 		{
 			case "ArgentinaLuz":
 			descuento = 15;
 			break;

 			case "FelipeLamparas":
 			descuento = 10;
 			break;

 			default:
 			descuento = 5;
 			break;
 		}
 		break;

 		case 2:
 		case 1:
 		descuento = 0;
 		break;

 		default:
 		descuento = 50;
 		break;
 	}



    precioFinal = precio - precio * descuento /100;   

    if(precioFinal > 120 )
    { 
    IIBB = precioFinal * 10/100;
    precioFinal = precioFinal + IIBB
    alert("Usted pago " +IIBB +" de IIBB");
    }

    document.getElementById("txtIdprecioDescuento").value=precioFinal;

}


