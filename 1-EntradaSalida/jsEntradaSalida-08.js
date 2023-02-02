/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let NumeroUno;
	let NumeroDos;
	let Resultado; 

	NumeroUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	NumeroDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	Resultado = NumeroUno % NumeroDos; 
	alert("El resto es " + Resultado); 
}

/* txtIdNumeroDividendo
txtIdNumeroDivisor*/