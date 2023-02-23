/* Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
 Ivanna Alderete - Div x*/
function mostrar()
{
	let numero;
	let positivos = 0;
	let negativos = 1;
	let respuesta = 'si';
	let contadorNegativos = 0;

	while (respuesta == 'si')
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero >= 0){
			positivos = positivos + numero;
		}
		else {
			contadorNegativos = contadorNegativos + 1;
			negativos = negativos * numero; 
		}
		respuesta = prompt("Quiere ingresar otro numero? escriba si/no");
	}

	if(contadorNegativos == 0){
		negativos = 0;
	}

	document.getElementById("txtIdSuma").value = positivos; 
	document.getElementById("txtIdProducto").value = negativos;

} 