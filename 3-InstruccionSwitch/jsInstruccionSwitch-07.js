/* Ivanna Alderete - Div x */
function mostrar()
{
	let Destino;

	Destino = document.getElementById("txtIdDestino").value;

	switch (Destino){
		case "Bariloche": 
			alert("Oeste");
			break; 
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata": 
			alert("Este");
			break; 
		case "Ushuaia":
			alert("Sur");
			break; 
	}
}