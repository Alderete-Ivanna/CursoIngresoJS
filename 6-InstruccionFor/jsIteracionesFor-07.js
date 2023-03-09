function mostrar()
{
/* 1)Se requiere un sistema de ingresos de usuarios de la farmacia "Marina", se deben tomar y 
//validar los siguientes datos.
// Nombre, tipo de consulta(obra social, prepaga o particular), numero de espera(del 0 al 99),
// DNI(validar entre 10.000.000 a 99.999.999) y monto de la factura emitida (validar que no sea negativo):
// a)informar el promedio gastado por persona.
// b)La cantidad de personas que su DNI es menor a 80.000.000.
// c)El nombre y numero de espera del que más gastó.
// d)El nombre del cliente particular que menos gastó.
// Pedir datos por prompt y mostrar por document.write*/

let respuesta = 'si';
let nombre;
let nombreDelMaxGasto;
let nombreMontoFacturaMin;
let numero;
let tipoConsulta;
let numeroDeEspera;
let dni;
let montoFactura;
let montoFacturaMin;

let acumuladorMontoFactura = 0;
let contadorMontoFactura = 0;
let contadorPersonasdniMenor = 0;
let banderaMaxgasto = true;
let nombreClienteMin = true;

while(respuesta == 'si'){

	nombre = prompt("ingrese el nombre :");
	while (!isNaN(nombre)){
		nombre = prompt("ingrese el nombre :");
	}

	tipoConsulta = prompt("ingrese su tipo de consulta entre obra social, prepaga, particular");
	while(tipoConsulta != "obra social" && tipoConsulta != "prepaga" && tipoConsulta != "particular"){
		tipoConsulta = prompt("ingrese su tipo de consulta entre obra social, prepaga, particular");
	}

	numeroDeEspera = parseInt(prompt("ingrese su numero de espera entre 0 y 99"));
	while(isNaN(numeroDeEspera) || numeroDeEspera < 0 || numeroDeEspera > 99){
		numeroDeEspera = parseInt(prompt("ingrese su numero de espera entre 0 y 99"));
	}

	dni = parseFloat(prompt("ingrese su dni, entre 10.000.000 a 99.999.999"));
	while(isNaN(dni) || dni < 10000000 || dni > 99999999){
		dni = parseFloat(prompt("ingrese su dni, entre 10.000.000 a 99.999.999"));
	}

	montoFactura = parseInt(prompt("ingrese su monto de factura"));
	while(isNaN(montoFactura) || montoFactura<0){
		montoFactura = parseInt(prompt("ingrese su monto de factura"));
	}

	// a)informar el promedio gastado por persona.

	acumuladorMontoFactura = acumuladorMontoFactura + montoFactura;
	contadorMontoFactura++;

	// b)La cantidad de personas que su DNI es menor a 80.000.000.

	if(dni < 80000000){
		contadorPersonasdniMenor++;
	}

	// c)El nombre y numero de espera del que más gastó.

	if(banderaMaxgasto == true || montoFactura > MaxGasto){
		MaxGasto = montoFactura;
		nombreDelMaxGasto = nombre;
		numero = numeroDeEspera;
		banderaMaxgasto = false;
	}

	// d)El nombre del cliente particular que menos gastó.

	if(tipoConsulta == "particular" && (nombreClienteMin == true || montoFacturaMin > montoFactura)){
		montoFacturaMin = montoFactura;
		nombreMontoFacturaMin = nombre;
		nombreClienteMin = false;
	}
	
	respuesta = prompt("desea continuar? ponga si o no");

}//fin del while.

promedio = acumuladorMontoFactura / contadorMontoFactura;

	document.write("informar el promedio gastado por persona: " + promedio.toFixed(2) + "<br>");
	document.write("La cantidad de personas que su DNI es menor a 80.000.000 son: " + contadorPersonasdniMenor + "<br>");
	document.write("El nombre y numero de espera del que más gastó es: " + nombreDelMaxGasto + " y " + numero + "<br>");
	document.write("El nombre del cliente particular que menos gastó es: " + nombreMontoFacturaMin);

}