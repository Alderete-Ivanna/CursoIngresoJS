function mostrar()
{
/*Inmoviliaria: Nos piden armar un programa para ingresar los siguientes datos de los inquilinos de los inmuebles: 
nombre,
lugar(CABA, Conurbano, Interior) 
tipo( dpto, casa, quinta) en CABA solo se alquilan dptos y casas
cantidad de habitantes (1-3 p/ dpto, 1-7 p/casa, 1-15 p/ quinta)
alquiler
INFORMAR: 
// a) Cantidad de casa alquiladas en CABA
// b) El inquilino con alquiler más caro //nombre de
// c) Del interior del país, la quinta más cara */ // toFixed.2*/

let respuesta = 'si';
let nombre;
let nombreMaxquinta;
let nombreInquilinoMax;
let lugar;
let tipo;
let habitantes;
let alquiler;
let alquilerMax;
let alquilerMaxQuinta;

let contadorCasa = 0;
let banderaInquilinoMax = true;
let banderaQuintaMax = true;

while(respuesta == 'si'){

	nombre = prompt("Ingrese el nombre :");
	while (!isNaN(nombre)) {
		nombre = prompt("Error: Ingrese el nombre :");
	}

	lugar = prompt("ingrese lugar entre CABA, Conurbano, Interior");
	while(lugar != "caba" && lugar != "conurbano" && lugar != "interior"){
		lugar = prompt("ingrese lugar entre CABA, Conurbano, Interior");
	}

	if(lugar == "caba"){
		tipo = prompt("ingrese tipo: dpto, casa, quinta");
		while(tipo!= "dpto" && tipo!= "casa"){
			tipo = prompt("ingrese tipo: dpto, casa, quinta");
		}
	}
	else{
		tipo = prompt("ingrese tipo: dpto, casa, quinta");
		while(tipo !="dpto" && tipo != "casa" && tipo != "quinta"){
			tipo = prompt("ingrese tipo: dpto, casa, quinta");
		}
	}

	switch (tipo){

		case "dpto": 
			habitantes = parseInt(prompt("ingrese cantidad habitantes entre 1-3"));
			while(habitantes > 3 || habitantes < 1){
				habitantes = parseInt(prompt("ingrese cantidad habitantes entre 1-3"));
			}
			break;
		case "casa":
			habitantes = parseInt(prompt("ingrese cantidad de habitantes entre 1-7"));
			while(habitantes > 7 || habitantes < 1){
				habitantes = parseInt(prompt("ingrese cantidad de habitantes entre 1-7"));
			}
			break;
		case "quinta":
			habitantes = parseInt(prompt("ingrese cantidad de habitantes entre 1-15"));
			while(habitantes > 15 || habitantes < 1){
				habitantes = parseInt(prompt("ingrese cantidad de habitantes entre 1-15"));
			}
			break;

	}

	alquiler = parseInt(prompt("ingrese cuanto paga de alquiler entre 12000 y 70000"));
	while(alquiler < 12000 || alquiler > 70000){
		alquiler = parseInt(prompt("ingrese cuanto paga de alquiler entre 12000 y 70000"));
	}

	//a) Cantidad de casa alquiladas en CABA.
	if(tipo == "casa" && lugar == "caba"){
		contadorCasa++;
	}

	// b) El inquilino con alquiler más caro.

		if(banderaInquilinoMax==true || alquilerMax < alquiler)
		{
			alquilerMax = alquiler;
			nombreInquilinoMax = nombre;
			banderaInquilinoMax = false;
		}

	// c) Del interior del país, la quinta más cara.
	
	if(tipo == "quinta"){

		if((banderaQuintaMax==true || alquilerMaxQuinta < alquiler) && lugar == "interior")
		{
		alquilerMaxQuinta = alquiler;
		nombreMaxquinta = nombre;
		banderaQuintaMax = false;
		}

	}
		
	respuesta=prompt("desea continuar? ponga si o no");
}

document.write("Cantidad de casa alquiladas en CABA es: " + contadorCasa + "<br>");
document.write("El inquilino con alquiler más caro es: " + nombreInquilinoMax + "<br>");
document.write("Del interior del país, la quinta más cara es: " + nombreMaxquinta);

}