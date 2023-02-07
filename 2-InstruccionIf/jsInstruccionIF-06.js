/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente 
(entre 13 y 17 años) o niño (menor a 13 años).
Ivanna Alderete - Div x*/
function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value); 

	if ( edad >= 18){

		alert("Es mayor de edad");
	}
	else {
		if ( edad >= 13 && edad <= 17){
		alert("Es adolescente");
	} 
	else {
		alert("Es un niño");
	}
	} 
}