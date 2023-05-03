function mostrar()
{
/*(Ivanna Alderete) ejercicio examen curso de ingreso.
1) De una Página se debe ingresar una cantidad indeterminada de interacciones diaria de usuarios, validando los siguientes datos:
	nombre de usuario
	edad
	cantidad de descargas
	tipo(“REGISTRADO” o “VIP”)
Informar:

a) El nombre del usuario de tipo “VIP” más joven.

b) La cantidad total de descargas del día.

c) Promedio total de descargas de los usuarios del tipo “REGISTRADO”.

let respuesta = 'si';
let nombre;
let nombreDelapersoMasJoven;
let edad;
let edadMinima;
let descargas;
let tipo;
let promedioDescargas;

let banderaUsuarioMasJoven = true;
let acumuladorDescargasDiarias = 0;
let contadorVip = 0;
let contadorRegistrado = 0;
let acumuladorRegistrado = 0;

while(respuesta == 'si'){

	nombre = prompt("Ingrese su nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("Ingrese su nombre:");
		}

	edad = prompt("ingrese su edad, rango 16 a 90 años")
	while(isNaN(edad) || (edad < 16 || edad > 90)){
		edad = prompt("ingrese su edad, rango 16 a 90 años")
	}

	descargas = parseInt(prompt("ingrese numero de descargas"));
	while(isNaN(descargas) || (descargas < 1 || descargas > 10000)){
		descargas = parseInt(prompt("ingrese numero de descargas"));
	}

	tipo = prompt("ingrese tipo, registrado o VIP");
	while(tipo != "VIP" && tipo != "registrado"){
		tipo = prompt("ingrese tipo, registrado o VIP");
	}

	//a) El nombre del usuario de tipo “VIP” más joven.

	if((banderaUsuarioMasJoven == true || edadMinima > edad) && tipo == "VIP"){
		edadMinima = edad;
		nombreDelapersoMasJoven = nombre;
		banderaUsuarioMasJoven = false;
	}

	if(tipo == "VIP"){
		contadorVip++;
	}

	//b) La cantidad total de descargas del día.

	acumuladorDescargasDiarias = acumuladorDescargasDiarias + descargas;

	// c) Promedio total de descargas de los usuarios del tipo “REGISTRADO”.

	if(tipo == "registrado"){
		acumuladorRegistrado = acumuladorRegistrado + descargas;
		contadorRegistrado++;
	}

	respuesta=prompt("desea continuar? ponga si o no");
}//fin del while.

	//  c) Promedio total de descargas de los usuarios del tipo “REGISTRADO”.
	promedioDescargas = acumuladorDescargasDiarias / contadorRegistrado;
	

	if(contadorVip == 0){
	document.write("No se ingresaron usuarios VIP"+"<br>");
}
	else{
	document.write("El nombre del usuario VIP más jóven es "+ nombreDelapersoMasJoven +"<br>");
}
	
	document.write("La cantidad total de descargas del día es : " + acumuladorDescargasDiarias + "<br>");
	document.write("Promedio total de descargas de los usuarios del tipo “registrado” es: " + promedioDescargas);*/







 	/*Vacaciones en Familia" 
	Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
	validando los datos ingresados:
	nombre del pasajero titular, 
	destino( “Brasil”, “Caribe” o “Europa”), 
	temporada(“alta”,”baja”,“media”),
	cantidad de pasajeros que viajan.
	Informar:
	a)El destino más elegido.
	b)El nombre del pasajero titular que lleva menos pasajeros.
	c)El promedio de personas, que viajan en temporada alta.
	d)El total de personas que viajaron a Europa.*/

	let respuesta = 'si';
	let mensaje;
	let nombre;
	let nombreCantidadMenos;
	let destino;
	let temporada;
	let cantidadPasajeros;
	let cantidadMenosPasajeros;
	let promedio;

	let banderaMenosPasajeros = true;

	let contadorBrasil = 0;
	let contadorCaribe = 0;
	let contadorEuropa = 0;
	let contadorTemporadaAlta = 0;
	let acumuladorTemporadaAlta = 0;

		while(respuesta == 'si'){

			nombre = prompt("ingrese el nombre :");
			while (!isNaN(nombre)){
				nombre = prompt("ingrese el nombre :");
			}

			destino = prompt("ingrese destino, brasil, caribe, europa");
			while(destino != "brasil" & destino != "caribe" & destino != "europa"){
				destino = prompt("ingrese destino, brasil, caribe, europa");
			}

			temporada = prompt("ingrese temporada entre, alta, baja o media");
			while(temporada != "alta" & temporada != "baja" & temporada != "media"){
				temporada = prompt("ingrese temporada entre, alta, baja o media");
			}

			cantidadPasajeros = parseInt(prompt("ingrese cantidad de pasajeros entre 2 y 14"));
			while(cantidadPasajeros > 14 || cantidadPasajeros < 2){
				cantidadPasajeros = parseInt(prompt("ingrese cantidad de pasajeros entre 2 y 14"));
			}

			
			//b)El nombre del pasajero titular que lleva menos pasajeros. 

			if(banderaMenosPasajeros == true || cantidadMenosPasajeros > cantidadPasajeros){
				cantidadMenosPasajeros = cantidadPasajeros;
				nombreCantidadMenos = nombre;
				banderaMenosPasajeros = false;
			}

			switch (destino){

				case "brasil": 
					contadorBrasil++;
					break;
		
				case "caribe":
					contadorCaribe++;
					break;

				case "europa":
					contadorEuropa++;
					break;
			}

			//c)El promedio de personas, que viajan en temporada alta.
			if(temporada == "alta"){
				acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadPasajeros;
				contadorTemporadaAlta++;
			} 

			respuesta=prompt("desea continuar? ponga si o no");
		}//fin del while.
		
		//a)El destino más elegido.
		if(contadorBrasil>contadorCaribe && contadorBrasil>contadorEuropa){
			mensaje = "Brasil";
		}
		else if(contadorCaribe>contadorEuropa)
		{
				mensaje = "Caribe";
		}
		else{
				mensaje = "Europa";
		}

		promedio = acumuladorTemporadaAlta/contadorTemporadaAlta;


	document.write("El destino más elegido es: " + mensaje + "<br>");
    document.write("El nombre del pasajero titular que lleva menos pasajeros es: " + nombreCantidadMenos + "<br>");

	if(contadorTemporadaAlta != 0){
		document.write("El promedio de personas, que viajan en temporada alta es: " + promedio + "<br>");
	}
	else{
		document.write("No se registro viajes en temporada alta");
	}
    
    document.write("El total de personas que viajaron a Europa: " + contadorEuropa + "<br>");
 
}