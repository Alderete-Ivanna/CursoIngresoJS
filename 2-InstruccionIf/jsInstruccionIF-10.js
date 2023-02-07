/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
 Ivanna Alderete - Div x*/
function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo); 

	if ( nota >= 9){
		alert("Excelente nota: " + nota);
	}
	else if ( nota < 4){
		alert("Vamos, la proxima se puede. Nota: " + nota);
	}
	else{
		alert("Aprobó. Nota: " + nota);
	}
}