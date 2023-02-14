/* Ivanna Alderete - Div x */
function mostrar()
{
	let Destino;

	Destino = document.getElementById("txtIdDestino").value;

	switch (Destino){
		case "Bariloche": 
			alert("Frio");
			break; 
		case "Cataratas":
			alert("Calor");
			break;
		case "Mar del plata": 
			alert("Calor");
			break; 
		case "Ushuaia":
			alert("Frio");
			break; 
	}

}