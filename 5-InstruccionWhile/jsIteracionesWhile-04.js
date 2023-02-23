/* al presionar el botón 
pedir un número entre 0 y 9 inclusive.
 Ivanna Alderete - Div x */
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while (!(numeroIngresado >=0 && numeroIngresado<=9)){
		alert("incorrecto");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
}