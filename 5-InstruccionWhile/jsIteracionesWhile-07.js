/* Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
 Ivanna Alderete - Div x */
function mostrar()
{
	let acumulador = 0;
	let numero; 
	let respuesta = 'si';
	let i = 0;

	while (respuesta == 'si'){

		numero = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numero;
		i = i + 1; 
		respuesta = prompt("Quiere ingresar otro numero? escriba si/no");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = (acumulador / i).toFixed(1);
}