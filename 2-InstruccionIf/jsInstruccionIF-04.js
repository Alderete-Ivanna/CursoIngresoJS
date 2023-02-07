/* Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive).
 Ivanna Alderete - Div x */
function mostrar()
{
	let edad; 
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= 13) { 

		if ( edad <= 17) { 

			alert("Es adolescente");  
			
		}
	}

}