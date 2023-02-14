/* Ivanna Alderete - Div x */
function mostrar()
{
	let destino; 
	let estacion; 
	let PrecioFinal;
	let porcentaje;
	const PRECIO = 15000; 
	porcentaje = 0;

	destino = document.getElementById("txtIdDestino").value; 
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion){
		case "Invierno": 
			switch (destino){
				case "Bariloche":
					porcentaje = 20;
				break;
				case "Mar del plata":
					porcentaje = -20;
				break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = -10;
				break;
			}
			break;
		case "Verano": 
			switch (destino){
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Mar del plata":
					porcentaje = 20;
				break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = 10;
				break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino){
				case "Cordoba":
					PrecioFinal = PRECIO;
				break;
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
				break;
			}
			break;
	}
	PrecioFinal = PRECIO + PRECIO * porcentaje / 100;
	PrecioFinal = PRECIO + PRECIO * porcentaje / 100;
	alert("Precio final " + PrecioFinal);
}