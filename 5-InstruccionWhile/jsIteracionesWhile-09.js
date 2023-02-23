/* Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
 Ivanna Alderete - Div x */
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let flag = 0;
	let respuesta ='Si'; 
	
	while(respuesta == 'Si')
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(flag == 0){
			maximo = numero;
			minimo = numero;
			flag = 1;
		}
		if(numero < minimo){
			minimo = numero;
		}

		else if(numero > maximo){
			maximo = numero
		}

		respuesta = prompt("desea continuar? ponga Si/No");
	}

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}