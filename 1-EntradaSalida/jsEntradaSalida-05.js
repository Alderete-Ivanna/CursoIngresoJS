/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Ivanna Alderete - Div x	*/
function mostrar()
{	
	let Nombre;
	let Edad;

	Nombre = document.getElementById("txtIdNombre").value;
	Edad = document.getElementById("txtIdEdad").value; 

	alert(" usted se llama " + Nombre + " y tiene " + Edad); 

}

/* 
txtIdNombre 
txtIdEdad
*/ 