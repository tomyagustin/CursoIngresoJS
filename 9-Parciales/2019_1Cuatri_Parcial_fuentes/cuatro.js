/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
    let numero1;
    let numero2;
    let resultado;
    let numero1NoParseado;
    let numero2NoParseado;

    numero1NoParseado = prompt("Ingrese un numero");
    numero1 = parseInt(numero1NoParseado);
    numero2NoParseado = prompt("Ingrese otro numero");
    numero2 = parseInt(numero2NoParseado);

    if(numero1 ==  numero2)
    {
        alert(numero1NoParseado + numero2NoParseado);
    }



}