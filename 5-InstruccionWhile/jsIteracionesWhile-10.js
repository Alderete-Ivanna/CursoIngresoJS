/* Ivanna Alderete - Div */
function mostrar()
{
	let numero;
	let respuesta ='si';
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos = 0;
	let promedioNegativos; 
	let diferencia;

	while(respuesta == 'si')
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero > 0){
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;
			alert("Positivo");
		}
		else if(numero < 0){
			acumuladorNegativos = acumuladorNegativos + numero; 
			contadorNegativos++;
			alert("negativo");
		}
		else if(numero == 0){
			contadorCeros++;
			alert("Cero");
		}
		if(numero % 2 == 0){
			contadorPares++;
		}
		respuesta=prompt("desea continuar?");
	}
	if (contadorPositivos > 0){
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	if(contadorNegativos > 0){
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;

	document.write("La suma de los negativos es " + acumuladorNegativos + "<br>");
	document.write("La suma de los positivos es " + acumuladorPositivos + "<br>");
	document.write("Cantidad de positivos = " + contadorPositivos + "<br>");
	document.write("Cantidad de negativos = " +  contadorNegativos + "<br>");
	document.write("La cantidad de ceros es " + contadorCeros + "<br>");
	document.write("Cantidad de pares = " + contadorPares + "<br>");
	document.write("Promedio de positivos = " + promedioPositivos.toFixed(1) + "<br>");
	document.write("Pormedio de negativos = " + promedioNegativos.toFixed(2) + "<br>");
	document.write("Diferencia = " + diferencia); 
}