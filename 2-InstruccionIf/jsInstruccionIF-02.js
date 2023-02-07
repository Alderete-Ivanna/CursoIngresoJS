/* Al ingresar una edad debemos informar solo si la persona es mayor de edad. 
 Ivanna Alderete - Div x*/
function mostrar()
{
	let edad; 
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if( edad >= 18){
		alert("Es mayor de edad"); 
	}

	
}