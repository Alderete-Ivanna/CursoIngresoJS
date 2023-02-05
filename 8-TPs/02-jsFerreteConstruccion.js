/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
 Ivanna Alderete - Div x*/

function Rectangulo () 
{
    let Largo;
    let Ancho;
    let Perimetro;
    let Alambre; 

    Largo = parseInt(document.getElementById("txtIdLargo").value);
    Ancho = parseInt(document.getElementById("txtIdAncho").value);
    Perimetro = (Ancho + Largo) * 2; 
    Alambre = Perimetro * 3; 

    alert("Se necesitan comprar " + Alambre + " metros de alambre"); 
}
function Circulo () 
{
	let Perimetro;
    let Radio;
    let Alambre; 
    const PI = 3.14; 

    Radio = parseInt(document.getElementById("txtIdRadio").value);
    Perimetro = 2 * PI * Radio;
    Alambre = Perimetro * 3;

    alert("Se necesita comprar " + Alambre + " metros de alambre");
}
function Materiales () 
{
	let Largo;
    let Ancho;
    let Area;
    let cal;
    let cemento; 

    Largo = parseInt(document.getElementById("txtIdLargo").value);
    Ancho = parseInt(document.getElementById("txtIdAncho").value);

    Area = Largo * Ancho;
    cemento = Area * 2;
    cal = Area * 3;

    alert("Para el contrapiso de " + Area + " m2, se necesitan comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

    

}