function mostrar()
{
    /*(Ivanna Alderete). 2) De 10 corredores de atletismo se deben ingresar y validar los siguientes datos:
	nombre
	edad
	tiempo(dato entero expresado en segundos)
	sexo

Informar:

a) El nombre del hombre con más tiempo(si lo hay).

b) El promedio de la edad de todos los participantes.

c) La cantidad de corredores de sexo femenino.

let nombre;
let nombreDelHombreConMaxTiempo;
let edad;
let tiempo;
let tiempoMax;
let sexo;
let promedioEdades = 0;

let banderaHombreConMaxTiempo = true;
let acumuladorEdad = 0;
let contadorFemenino = 0;

for (let i = 0; i < 10; i++){

	nombre = prompt("Ingrese su nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("Ingrese su nombre:");
		}

	edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad) || edad < 18 || edad > 60){
			edad = parseInt(prompt("ingrese su edad"));
		}

	tiempo = prompt("ingrese su tiempo, en segundos");
		while(isNaN(tiempo) || tiempo < 10){
			tiempo = prompt("ingrese su tiempo, en segundos");
		}
	
	sexo = prompt("ingrese su sexo, f o m");
		while(!isNaN(sexo) || sexo!='f' && sexo!='m'){
			sexo = prompt("ingrese su sexo, f o m");
		}

	//a) El nombre del hombre con más tiempo(si lo hay).
	if(sexo=='m')
	{
		if(banderaHombreConMaxTiempo==true || tiempoMax < tiempo)
		{
			tiempoMax = tiempo;
			nombreDelHombreConMaxTiempo = nombre;
			banderaHombreConMaxTiempo = false;
		}
	}

	// b) El promedio de la edad de todos los participantes.

	acumuladorEdad = acumuladorEdad + edad;

	//c) La cantidad de corredores de sexo femenino.
	if(sexo=='f')
	{
		contadorFemenino++;
	}

}

	promedioEdades = acumuladorEdad /10;

	if(banderaHombreConMaxTiempo==true)
	{
		document.write("El nombre del hombre con más tiempo es: no hay." + "<br>");
	}
	else
	{
		document.write("El nombre del hombre con más tiempo es: " + nombreDelHombreConMaxTiempo + "<br>");
	}

	document.write("El promedio de la edad de todos los participantes es: " + promedioEdades + "<br>");
	document.write("La cantidad de corredores de sexo femenino es: " + contadorFemenino + "<br>");*/




	/*Bienvenidos: debemos alquilar el servicio de transporte para llegar a Bariloche con un grupo de personas, 
	de cada persona debemos optener los siguientes datos:
	Nombre,
	Obra Social ("PAMI", "OSDE" o "otras"),
	Edad(solo pueden ir mayores de edad),
	temperatura corporal(validar)
	y sexo (validar).
	NOTA:el precio por pasajero es de $9000.
	Se debe informar (solo si corresponde):
	a) La cantidad de personas con PAMI de mas de 60 años.
	b) El nombre y temperatura de la mujer OSDE mas joven.
	c) Cuanto sale el viaje total sin descuento.
	d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 
	25%, que solo mostramos si corresponde*/

	let respuesta = 'si';
	let nombre;
	let nombreMasJoven;
	let obraSocial;
	let edad;
	let edadMasJoven;
	let temperatura;
	let temperaturaMujer;
	let sexo;
	let pasajeTotalSinDescuento;
	let precioDescuentoPami;
	let viajeConDescuento;

	let contadorPami60 = 0;
	let contadorPami = 0;
	let contadorPasajeros = 0;
	let contadorMujeres = 0;

	let porcentajePami;
	let banderaMujerOsde = true;

	while(respuesta == 'si'){

		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		obraSocial = prompt("ingrese obra social entre: pami, osde u otras");
		while(obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otras"){
			obraSocial = prompt("ingrese obra social entre: pami, osde u otras");
		}

		edad = parseInt(prompt("ingrese la edad:"))
		while (edad < 18 || edad > 90) {
			edad = parseInt(prompt("ingrese la edad:"));
		}

		temperatura = parseInt(prompt("ingrese su temperatura corporal, entre 35 y 40 grados"));
		while(temperatura < 35 || temperatura > 40){
			temperatura = parseInt(prompt("ingrese su temperatura corporal, entre 35 y 40 grados"));
		}

		sexo = prompt("ingrese su sexo, f o m");
		while(!isNaN(sexo) || sexo!='f' && sexo!='m'){
			sexo = prompt("ingrese su sexo, f o m");
		}

		//a) La cantidad de personas con PAMI de mas de 60 años.
		//b) El nombre y temperatura de la mujer OSDE mas joven.
		switch(obraSocial){
			case "pami":
				if(edad > 60){
					contadorPami60++;
				}
				contadorPami++;
			break;
			case "osde":
				if(sexo == 'f' && (banderaMujerOsde == true || edadMasJoven > edad)){
					edadMasJoven = edad;
					nombreMasJoven = nombre;
					temperaturaMujer = temperatura;
					banderaMujerOsde = false;
				}
				contadorMujeres++;
			break;		
		}

		contadorPasajeros++;

		respuesta=prompt("desea continuar? ponga si o no");
	}//fin del while.

	//c) Cuanto sale el viaje total sin descuento.
	pasajeTotalSinDescuento = 9000 * contadorPasajeros;

	//d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%.
	porcentajePami = contadorPami / contadorPasajeros * 100;
	precioDescuentoPami= 9000 * 25 / 100;
	viajeConDescuento = 9000 - precioDescuentoPami;

	if(porcentajePami > 50){
		document.write("El precio final con descuento es: " + viajeConDescuento + "<br>");
	}
	else{
		document.write("No se llego al 50% de pasajeros de pami" + "<br>");
	}

	document.write("El viaje total sin descuento es de: " + pasajeTotalSinDescuento + "<br>");

	if(contadorMujeres != 0){
		document.write("El nombre de la mujer mas joven de osde es: " + nombreMasJoven + " y su temperatura es: " + temperaturaMujer + "<br>");
	}
	else{
		document.write("no se registraron mujeres");
	}

	if(contadorPami !=0){
		document.write("La cantidad de personas de pami con mas de 60 es: " + contadorPami60 + "<br>");
	}
	else{
		document.write("No se registraron personas de pami");
	}
}