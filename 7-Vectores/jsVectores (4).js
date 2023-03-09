function mostrar()
{
/* "Concierto"
Realizar el algoritmo que permita ingresar una cantidad indeterminada de tickets : 
recital
tipo("POP", "ROCK", " REGETTON"),
cantidad de entradas,(no mas de 20)  
precio de cada entrada, 
lugar("REX, "LUNA PARK", "TRASTIENDA"
// a)La cantidad de entradas pares vendidas. 
// b)A que tipo de recital la gente fue mas.  
// c)El precio de la entrada más barata, el tipo de musica y a donde era el recital
*/

let respuesta = 'si';
let recital;
let tipo;
let tipoDeMusica;
let cantidadEntradas;
let precio;
let precioMin;
let lugar;
let lugarRecital;
let recitalMensaje;

let contadorEntradasPares = 0;
let contadorPop = 0;
let contadorRegetton = 0;
let contadorRock = 0;
let banderaPrecioMin = true;


	while(respuesta == 'si'){
		
	recital = prompt("Ingrese el recital: ");
	while (!isNaN(recital)){
		recital = prompt("Ingrese el recital: ");
	}

	tipo = prompt("ingrese tipo de recital, pop, rock, regetton");
	while(tipo!="pop" && tipo!= "rock" && tipo!= "regetton"){
		tipo = prompt("ingrese tipo de recital, pop, rock, regetton");
	}

	cantidadEntradas = parseInt(prompt("ingresar cantidad de entradas, no mas de 20"));
	while(isNaN(cantidadEntradas) || cantidadEntradas > 20 || cantidadEntradas < 0){
		cantidadEntradas = parseInt(prompt("ingresar cantidad de entradas, no mas de 20"));
	}

	precio = prompt("ingrese precio de entrada, entre 10000 y 100000");
	while(isNaN(precio) || precio < 10000 || precio > 100000){
		precio = prompt("ingrese precio de entrada, entre 10000 y 100000");
	}

	lugar = prompt("ingrese lugar del concierto, entre rex, lunarpark, trastienda");
	while(lugar != "rex" && lugar != "lunapark" && lugar != "trastienda"){
		lugar = prompt("ingrese lugar del concierto, entre rex, lunarpark, trastienda");
	}

	// a)La cantidad de entradas pares vendidas.
	if(cantidadEntradas % 2 == 0){
		contadorEntradasPares = contadorEntradasPares + 1;
	}

	// b)A que tipo de recital la gente fue mas. 

	if(tipo == "pop"){
		contadorPop++;
	}
	else if(tipo == "regetton"){
		contadorRegetton++;
	}
	else{
		contadorRock++;
	}
		

	// c)El precio de la entrada más barata, el tipo de musica y a donde era el recital.

	if(banderaPrecioMin == true || precio < precioMin){
		precioMin = precio;
		tipoDeMusica = tipo;
		lugarRecital = lugar;
		banderaPrecioMin = false;
	}

		respuesta=prompt("desea continuar? ponga si o no");
	}//fin del while.

	if(contadorPop>contadorRegetton && contadorPop>contadorRock){
		recitalMensaje = "El mayor es pop";
	}
	else if(contadorRegetton>contadorRock)
	{
			recitalMensaje = "El mayor es regetton";
	}
	else{
			recitalMensaje = "El mayor es rock";
	}

	document.write("La cantidad de entradas pares vendidas es: " + contadorEntradasPares + "<br>");
	document.write("A que tipo de recital la gente fue mas: " + recitalMensaje + "<br>");
	document.write("El precio de la entrada más barata es: " + precioMin + " el tipo de musica es: " + tipoDeMusica + " y a donde era el recital es: " + lugarRecital + "<br>");
}