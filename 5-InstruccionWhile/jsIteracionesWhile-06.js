/* Ivanna Alderete - Div x */
function mostrar()
{
	let acumulador = 0;
	let numeroIngresado;
	let promedio;
	let i = 0;

	while (i < 5){
		numeroIngresado = parseInt(prompt("Ingresar numero: "));
		
		acumulador = acumulador + numeroIngresado;
		i = i + 1; 
	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}

