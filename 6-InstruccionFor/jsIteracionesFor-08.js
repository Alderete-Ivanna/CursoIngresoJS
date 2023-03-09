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

c) Promedio total de descargas de los usuarios del tipo “REGISTRADO”.*/

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
	document.write("Promedio total de descargas de los usuarios del tipo “registrado” es: " + promedioDescargas);
	
}