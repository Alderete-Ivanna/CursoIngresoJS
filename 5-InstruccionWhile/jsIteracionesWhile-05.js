/* Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
 Ivanna Alderete - Div x */
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f para femenino o m para masculino.");

	while (!(sexoIngresado == 'f' || sexoIngresado == 'm')){
		sexoIngresado = prompt("ingrese f para femenino o m para masculino.");
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;
	
}