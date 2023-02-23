/* al presionar el botón pedir la CLAVE (ayuda: es utn750)
 Ivanna Alderete - Div x */
function mostrar()
{
	let pasword; 
	pasword = prompt("Ingrese la clave");

	while (pasword != "utn750"){
		alert("Pasword incorrecto");
		pasword = prompt("Ingrese la clave");
	}	
	alert("clave correcta"); 
}
