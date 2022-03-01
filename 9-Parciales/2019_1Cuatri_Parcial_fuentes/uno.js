/*
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
    let ladoTriangulo;
    let perimetro; 

    ladoTriangulo = prompt("Ingrese el Lado del Trianguilo");
    ladoTriangulo = parseInt(ladoTriangulo);

    perimetro = ladoTriangulo *3;

    alert("El perimetro del triangulo es de " + perimetro);
}
