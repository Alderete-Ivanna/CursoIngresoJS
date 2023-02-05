/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Ivanna Alderete - Div x*/
function Sumar () 
{
	let PrimerPrecio;
    let SegundoPrecio;
    let TercerPrecio;
    let Resultado;

    PrimerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    SegundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value); 

    Resultado = PrimerPrecio + SegundoPrecio + TercerPrecio; 
    alert("La suma de los productos es $" + Resultado.toFixed(0)); 
}
function Promedio () 
{
	let PrimerPrecio;
    let SegundoPrecio;
    let TercerPrecio;
    let Suma;
    let Resultado;
    

    PrimerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    SegundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value); 

    Suma = PrimerPrecio + SegundoPrecio + TercerPrecio; 
    Resultado = Suma / 3; 
    
    alert("El promedio de los productos es $ " + Resultado.toFixed(1)); 
    
}
function PrecioFinal () 
{
	let PrimerPrecio;
    let SegundoPrecio;
    let TercerPrecio;
    let Suma;
    let iva;
    let Resultado;

    PrimerPrecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    SegundoPrecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    TercerPrecio = parseFloat(document.getElementById("txtIdPrecioTres").value);  

    Suma = PrimerPrecio + SegundoPrecio + TercerPrecio; 
    iva = Suma * 21 / 100; 
    Resultado = Suma + iva; 

    alert("El precio final con IVA es $ " + Resultado.toFixed(1)); 
    
}