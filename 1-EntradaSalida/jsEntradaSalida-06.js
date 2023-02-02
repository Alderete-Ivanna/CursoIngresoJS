/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Ivanna Alderete - Div x*/
function sumar()
{
	let NumeroUno;
	let NumeroDos; 
	let Resultado;

	NumeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	Resultado = NumeroUno + NumeroDos; 

	alert("La suma es " + Resultado); 
}

/* txtIdNumeroUno
txtIdNumeroDos */