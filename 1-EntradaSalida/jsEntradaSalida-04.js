/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Ivanna Alderete - Div x */
function mostrar()
{
	let NombreIngresado;

	NombreIngresado = prompt("Nombre de usuario");

	document.getElementById("txtIdNombre").value = NombreIngresado; 
}

