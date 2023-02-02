/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let Sueldo;
	let Resultado;
	let Aumento;

	Sueldo = parseInt(document.getElementById("txtIdSueldo").value); 
	Aumento = (Sueldo * 10/ 100);
	Resultado = (Sueldo + Aumento); 

	document.getElementById("txtIdResultado").value = Resultado; 


}

/* txtIdSueldo
txtIdResultado */