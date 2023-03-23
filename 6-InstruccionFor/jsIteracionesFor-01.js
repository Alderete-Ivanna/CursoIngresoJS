function mostrar()
{/* guarderia los nenes a inscribir:
	nombre
	edad(en meses)
	sexo
	si esta vacunado o no

	1)el nombre del mas joven 
	2)la cantidad de nenes vacunados (solo si hay)
	3)discriminar el sexo (solo si hay un sexo)
	4)el mayor con vacunas (solo si hay vacunados).

let respuesta = 'si';
let nombre;
let nombreDelMasJoven;
let nombreDelMayorConVacunas;
let edad;
let edadMax;
let edadMasJoven;
let sexo;
let vacunación;

let banderaMasJoven = true;
let banderaMayorVacunas = true;
let contadorNenesVacunados = 0;
let contadorM = 0;
let contadorF = 0;

	while(respuesta == 'si'){

		nombre = prompt("Ingrese su nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("Ingrese su nombre:");
		}

		edad = parseInt(prompt("ingrese su edad en meses"));
		while (isNaN(edad) || edad < 1 || edad > 12){
			edad = parseInt(prompt("ingrese su edad en meses"));
		}

		sexo = prompt("ingrese su sexo, f o m");
		while(!isNaN(sexo) || sexo!='f' && sexo!='m'){
			sexo = prompt("ingrese su sexo, f o m");
		}

		vacunación = prompt("ingrese si esta vacunado el niño");
		while(vacunación != "si" && vacunación !="no"){
			vacunación = prompt("ingrese si esta vacunado el niño");
		}

		//1)el nombre del mas joven.

		if(banderaMasJoven == true || edadMasJoven > edad){
			edadMasJoven = edad;
			nombreDelMasJoven = nombre;
			banderaMasJoven = false;
		}

		//2)la cantidad de nenes vacunados (solo si hay).
		//4)el mayor con vacunas (solo si hay vacunados)
		if(vacunación == "si"){
			contadorNenesVacunados++;
			if(banderaMayorVacunas == true || edadMax < edad){
				edadMax = edad;
				nombreDelMayorConVacunas = nombre;
				banderaMayorVacunas = false;
			}
		}
		
		//3)discriminar el sexo (solo si hay un sexo).

		if(sexo == "m"){
			contadorM++
		}
		else{
			contadorF++
		}

		respuesta=prompt("desea continuar? ponga si o no");

	}//fin del while.

	document.write("El nombre del mas joven es: " + nombreDelMasJoven + "<br>");

	if(contadorNenesVacunados >=1){
		document.write("La cantidad de nenes vacunados (solo si hay) es: " + contadorNenesVacunados + "<br>");
	}

	if(contadorF>0){
		document.write("La cantidad de nenes es: " + contadorM + "<br>");
	}
	
	if(contadorF>0){
		document.write("La cantidad de nenas es: " + contadorF + "<br>");
	}

	document.write("El mayor con vacunas (solo si hay vacunados) es: " + nombreDelMayorConVacunas + " y su edad es: " + edadMax +"<br>");*/





	// 2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
	// -Necesitaremos: nombre del jugador/a
	// -Género (validar M/F/X)
	// -Edad (validar entre 3 a 99 años)
	// -Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
	// a)Deberemos mostrar el promedio de edad de los jugadores ingresados.
	// b)El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.
	// c)El porcentaje de personas de género masculino con respecto al total.

	let nombre;
	let nombreEdadMax;
	let nombreEdadMin;
	let genero;
	let edad;
	let edadMin;
	let edadMax; 
	let pokemonInicial;
	let pokemonElegido;
	let pokemonElegidoMin;
	let porcentaje;
	let promedioEdad;
	let respuesta = 'si';

	let banderaEdadMax = true;
	let banderaEdadMin = true;

	let acumuladorEdad = 0;
	let contadorTotal = 0;
	let contadorEdad = 0;
	let contadorMasculino = 0;

	while(respuesta == 'si'){

		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		genero = prompt("ingrese su sexo, f, x o m");
		while(genero!='f' && genero!='m' && genero != 'x'){
			genero = prompt("ingrese su sexo, f, x o m");
		}

		edad = parseInt(prompt("ingrese la edad:"));
		while (isNaN(edad) || edad < 3 || edad > 99){
			edad = parseInt(prompt("ingrese la edad:"));
		}

		pokemonInicial = prompt("ingrese su pokemon inicial entre Charmander, Squirtle o Bolbasaur");
		while(pokemonInicial!= "charmander" && pokemonInicial!= "squirtle" && pokemonInicial != "bolbasaur"){
			pokemonInicial = prompt("ingrese su pokemon inicial entre Charmander, Squirtle o Bolbasaur");
		}

		
		// b)El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.

		if(banderaEdadMax == true || edadMax<edad){
			edadMax = edad;
			nombreEdadMax = nombre;
			pokemonElegido = pokemonInicial;
			banderaEdadMax = false;
		}

		if(banderaEdadMin == true || edadMin>edad){
			edadMin = edad;
			nombreEdadMin = nombre;
			pokemonElegidoMin = pokemonInicial;
			banderaEdadMin = false;
		}

		acumuladorEdad = acumuladorEdad + edad;
		contadorEdad++;

		if(genero == 'm'){
			contadorMasculino++;
		}
		
		contadorTotal++;
	
	
		respuesta=prompt("desea continuar? ponga si o no");
	}//fin del while.
	
	// a)Deberemos mostrar el promedio de edad de los jugadores ingresados.

	promedioEdad = acumuladorEdad / contadorEdad;

	// c)El porcentaje de personas de género masculino con respecto al total.


	if (contadorMasculino > 0){
		porcentaje = (contadorMasculino / contadorTotal) * 100;
	}
	
	document.write("El promedio de edad de los jugadores ingresados es: " + promedioEdad + "<br>");
    document.write("El nombre del jugador mas grande de edad es:  " + nombreEdadMax + " y su pokemon es: " + pokemonElegido + "<br>");
    document.write("El nombre del jugador mas joven de edad es: " + nombreEdadMin + " y su pokemon es: " + pokemonElegidoMin + "<br>");
    document.write("El porcentaje de personas de género masculino con respecto al total es: " + porcentaje + "<br>");

}