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
// Pedir datos por prompt y mostrar por document.write

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
	document.write("El nombre del cliente particular que menos gastó es: " + nombreMontoFacturaMin);*/





/*Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas, validar:
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
1)mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
2)mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

let tipo;
let raza;
let edad;
let nombre;
let mensaje;

let promedioEdadGenerico;
let promedioEdadPeterbald;
let promedioEdadSiames;
let promedioEdadTurco
let promedioEdad;

let edadMayorGato;
let edadMayorOtro;
let edadMayorPajaro;
let edadMayorPerro;

let nombreDelAnimal;
let nombreDelGato;
let nombreDelPajaro;
let nombreDelPerro;

let contadorGenerico = 0;
let contadorSiames = 0;
let contadorTurco = 0;
let contadorPeterbald = 0;
let acumuladorGenerico = 0;
let acumuladorSiames = 0;
let acumuladorTurco = 0;
let acumuladorPeterbald = 0;

let contadorGatos = 0;
let contadorPerros = 0;
let contadorPajaros = 0;
let contadorOtros = 0;

let i = 0;

	for(i = 0;i<10;i++){
		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		tipo = prompt("ingrese tipo de animal entre gato, perro, pajaro u otro");
		while(tipo!="gato" && tipo != "perro" && tipo!="pajaro" && tipo!="otro"){
			tipo = prompt("ingrese tipo de animal entre gato, perro, pajaro uu otro");
		}
		switch(tipo){
			case "gato":
				raza = prompt("ingrese raza de gato, entre siames, turco, peterbald o generico");
				while(raza!="siames" && raza!="turco" && raza!="peterbald" && raza != "generico"){
					raza = prompt("ingrese raza de gato, entre siames, turco, peterbald o generico");
				}

				edad = parseInt(prompt("ingrese la edad felina:"))
				while (edad < 1 || edad > 20){
					edad = parseInt(prompt("ingrese la edad felina:"));
				}

			break;
			case "perro":
				raza = prompt("ingrese raza de perro entre, pastor, toy, callejero");
				while(raza!="pastor" && raza!="toy" && raza!="callejero"){
					raza = prompt("ingrese raza de perro entre, pastor, toy, callejero");
				}

				edad = parseInt(prompt("ingrese la edad perruna:"))
				while (edad < 1 || edad > 20){
					edad = parseInt(prompt("ingrese la edad perruna:"));
				}

			break;
			case "pajaro":
				raza = prompt("ingrese la raza del pajaro");

				edad = parseInt(prompt("ingrese la edad del ave:"))
				while (edad < 1 || edad > 50){
					edad = parseInt(prompt("ingrese la edad del ave:"));
				}

			break;
			case "otro":
				raza = prompt("ingrese la raza");

				edad = parseInt(prompt("ingrese la edad:"))
				while (edad < 1 || edad > 100){
					edad = parseInt(prompt("ingrese la edad:"));
				}
			break;
		}	

		//1)mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo.
		//2)mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza.

		switch(tipo){
			case "gato":
				if (i >= 0 || edad > edadMayorGato){
					edadMayorGato = edad;
					nombreDelGato = nombre;
				}
				switch(raza){
					case "siames":
						contadorSiames++;
						acumuladorSiames = acumuladorSiames + edad;
						break;
					case "turco":
						contadorTurco++;
						acumuladorTurco = acumuladorTurco + edad;
						break;
					case "peterbald":
						contadorPeterbald++;
						acumuladorPeterbald = acumuladorPeterbald + edad;
						break;
						case "generico":
						contadorGenerico++;
						acumuladorGenerico = acumuladorGenerico + edad;
						break;
				}
				contadorGatos++;
			break;
			case "perro":
				if (i >= 0 || edad > edadMayorPerro){
					edadMayorPerro = edad;
					nombreDelPerro = nombre;
				}
				contadorPerros++;
			break;
			case "pajaro":
				if (i >= 0 || edad > edadMayorPajaro){
					edadMayorPajaro = edad;
					nombreDelPajaro = nombre;
				}
				contadorPajaros++;
			break;
			case "otro":
				if (i >= 0 || edad > edadMayorOtro){
					edadMayorOtro = edad;
					nombreDelAnimal = nombre;
				}
				contadorOtros++;
			break;
		}
	}//fin del for.

	if(contadorSiames > contadorTurco && contadorSiames > contadorPeterbald && contadorSiames > contadorGenerico){
		mensaje = "Siames";

	} else if(contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico){
		mensaje = "Turco";
	}
	else if(contadorPeterbald > contadorGenerico){
		mensaje = "Peterbald";
	}
	else{
		mensaje = "generico";
	}


	if(contadorGenerico != 0){
		promedioEdadGenerico = acumuladorGenerico / contadorGenerico;
		promedioEdad = promedioEdadGenerico;
	}
	if(contadorPeterbald != 0){
		promedioEdadPeterbald = acumuladorPeterbald / contadorPeterbald;
		promedioEdad = promedioEdadPeterbald;
	}
	if(contadorSiames != 0){
		promedioEdadSiames = acumuladorSiames / contadorSiames;
		promedioEdad = promedioEdadSiames;
	}
	if(contadorTurco != 0){
		promedioEdadTurco = acumuladorTurco / contadorTurco;
		promedioEdad = promedioEdadTurco;
	}

	//1)mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo.

	if(contadorGatos != 0){
		document.write("El gato mas viejo registrado es: " + nombreDelGato + "<br>");
	}
	else{
		document.write("No se registraron ingresos de gatos" + "<br>");
	}

	if(contadorPerros != 0){
		document.write("El perro mas viejo registrado es: " + nombreDelPerro + "<br>");
	}
	else{
		document.write("No se registraron ingresos de perros" + "<br>");
	}
	
	if(contadorPajaros != 0){
		document.write("El pajaro mas viejo registrado es: " + nombreDelPajaro + "<br>");
	}
	else{
		document.write("No se registraron ingresos de pajaros" + "<br>");
	}

	if(contadorOtros != 0){
		document.write("El animal exotico mas viejo registrado es: " + nombreDelAnimal + "<br>");
	}
	else{
		document.write("No se registraron ingresos de animales exoticos" + "<br>");
	}

	//2)mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza.

	if(contadorGatos != 0){
		document.write("La raza de gatos que tiene más animales es: " + mensaje + " y su promedio de edad es: " + promedioEdad + "<br>");
	}
	else{
		document.write("No se ingresaron gatos al sistema");
	}
}