/* Ivanna Alderete - Div x */
function mostrar()
{
	let destino;
	let estacion;

	destino = document.getElementById("txtIdDestino").value; 
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion){
		case "Invierno": 
			switch (destino){
				case "Bariloche":
					alert("Se viaja");
				break;
				case "Mar del plata":
					alert("No se viaja");
				break;
				case "Cordoba":
				case "Cataratas":
					alert("No se viaja");
				break;
			}
			break;
		case "Verano": 
			switch (destino){
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
				break;
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
				break;
			}
			break;
		case "Otoño":
				alert("Se viaja");
			break;
		case "Primavera":
			switch (destino){
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
				break;
				case "Bariloche":
					alert("No se viaja");
			}
			break;
	}
}