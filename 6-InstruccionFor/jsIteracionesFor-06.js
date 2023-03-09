function mostrar()
{//Ivanna Alderete - Div x.
/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/ 

let continente;
let continenteMaxHabitantes;
let paisIngresado;
let paisMasFrio;
let cantidadHabitantes;
let maxHabitantes;
let nivelPobreza;
let temperatura;
let tempMinima;
let paisConMenosHabitantes;
let promedioHabitantes;
let promedioHabitantesPaisesCalor;
let cantidadMenosHabitantes;

let contadorPaisesMas40grados = 0;
let acumuladorMasCuarenta = 0;
let contadorTemperaturasImpares = 0;
let contadorTemperaturasPares = 0;
let banderaPaisMenosHabitantes = true; 
let acumuladorHabitantes = 0;
let banderaTempMinima = true;
let banderaMaxHabitantes = true;
let	contadorPaisesAmeriFrios = 0;

for(let i = 0; i < 5; i++){

	continente = prompt("ingrese un continente entre america, asia, europa, africa y oceania");
	while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania"){
		continente = prompt("ingrese un continente entre america, asia, europa, africa y oceania");
	}
	paisIngresado = (prompt("ingrese el nombre del pais"));
	while(!isNaN(paisIngresado)){
		paisIngresado = (prompt("ingrese el nombre del pais"));
	}

	cantidadHabitantes = prompt("ingrese cantidad de habitantes entre 1 y 7000 ")
	while(isNaN(cantidadHabitantes) || (cantidadHabitantes < 1 || cantidadHabitantes > 7000)){
		cantidadHabitantes = prompt("ingrese cantidad de habitantes entre 1 y 7000 ")
	}

	nivelPobreza = prompt("ingrese nivel de pobreza: pobre, rico, millonario");
	
	while(nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "millonario"){
		nivelPobreza = prompt("ingrese nivel de pobreza: pobre, rico, millonario");
	if (continente == "europa"){
		alert("en europa no hay paises pobres");
		nivelPobreza = prompt("ingrese nivel de pobreza: rico, millonario");
	}
	}
	
	temperatura = prompt("ingrese temperatura entre -50 y 50");
	while(isNaN(temperatura) || (temperatura < -50 || temperatura > 50)){
		temperatura = prompt("ingrese temperatura entre -50 y 50");
	}

	//a)La cantidad de temperaturas pares.

	if(temperatura % 2 == 0){
		contadorTemperaturasPares = contadorTemperaturasPares + 1;
	}
	// b)la cantidad de temperaturas impares de europa.

	if(temperatura % 2 == 1 && continente == "europa"){
		contadorTemperaturasImpares = contadorTemperaturasImpares + 1;
	}

	//c)El nombre del pais con menos habitantes.
	if(banderaPaisMenosHabitantes == true || cantidadMenosHabitantes > cantidadHabitantes){
		cantidadMenosHabitantes = cantidadHabitantes;
		paisConMenosHabitantes = paisIngresado;
		banderaPaisMenosHabitantes = false;
	}
	//d)la cantidad de paises que superan los 40 grados.
	//g)
	if(temperatura > 40){
		contadorPaisesMas40grados++;
		acumuladorMasCuarenta = acumuladorMasCuarenta + cantidadHabitantes;
	}
	//e)la cantidad de paises de america que tienen menos de 0 grados.
	switch(continente){
		case "america":
			if(temperatura < 0){
				contadorPaisesAmeriFrios++;
			}
			break;
	}
	//f)el promedio de habitantes entre los paises ingresados.
	acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
	//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	if(banderaTempMinima == true || tempMinima > temperatura){
		tempMinima = temperatura;
		paisMasFrio = paisIngresado;
		banderaTempMinima = false;
	}
	//i) que continente tiene mas habitantes.
	if(banderaMaxHabitantes == true || maxHabitantes < cantidadHabitantes){
		maxHabitantes = cantidadHabitantes;
		continenteMaxHabitantes = continente;
		banderaMaxHabitantes = false;
	} 
	
}

promedioHabitantes = acumuladorHabitantes / 5;
promedioHabitantesPaisesCalor = acumuladorMasCuarenta / 5;

document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
document.write("La cantidad de temperaturas impares de europa es: " + contadorTemperaturasImpares + "<br>");
document.write("El nombre del pais con menos habitantes es: " + paisConMenosHabitantes + "<br>");
document.write("La cantidad de paises que superan los 40 grados: " + contadorPaisesMas40grados + "<br>");
document.write("La cantidad de paises de america que tienen menos de 0 grados es: " + contadorPaisesAmeriFrios + "<br>");
document.write("El promedio de habitantes entre los paises ingresados es: " + promedioHabitantes + "<br>");
document.write("El promedio de habitantes entre los paises que superan los 40 grados es: " + promedioHabitantesPaisesCalor + "<br>");
document.write("la temperatura mínima ingresada es: " + tempMinima + " y el nombre del pais que registro esa temperatura es: " + paisMasFrio + "<br>");
document.write("El continente que tiene mas habitantes es: " + continenteMaxHabitantes);
}//revisar.
