/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa y africa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta promedio que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar() {
	let paisIngresado;
	let continente;
	let habitantes;
	let temperatura;
	let cantidadMenosHabitantes;
	let nombrePaisMenosHabitantes;
	let temperaturaMinima;
	let paisConMinimaTempIngresada;
	let acumuladorHabitantes = 0;
	let promedioHabitantes;

	let contadorTemperaturasPares = 0;
	let banderaMenosHabitantes = true;
	let cantidadPaisesAmericanosFrios = 0
	let banderaTemperaturaMinimaIngresada = true;

for (let i = 0; i < 5; i++) {

	continente = prompt("ingrese un continente entre america, asia, europa y africa");
	while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa"){
		continente = prompt("ingrese un continente entre america, asia, europa y africa");
	}
	paisIngresado = (prompt("ingrese el nombre del pais"));
	while(!isNaN(paisIngresado)){
		paisIngresado = (prompt("ingrese el nombre del pais"));
	}
	
	habitantes = parseInt(prompt("ingrese cantidad de habitantes en millones entre 1 y 2000"));
	while(isNaN(habitantes) && (habitantes < 1 || habitantes > 2000)){
		habitantes = parseInt(prompt("ingrese cantidad de habitantes en millones entre 1 y 2000"))
	}

	temperatura = prompt("ingrese temperatura entre -50 y 50 grados");
	while(temperatura < -50 ||  temperatura > 50 ){
		temperatura = prompt("ingrese temperatura entre -50 y 50 grados");
	}

	//a)La cantidad de temperaturas pares.
	if(temperatura % 2 == 0){
		contadorTemperaturasPares = contadorTemperaturasPares + 1;
	}

	//b)El nombre del pais con menos habitantes.
	if(banderaMenosHabitantes == true || cantidadMenosHabitantes > habitantes){
		cantidadMenosHabitantes = habitantes;
		nombrePaisMenosHabitantes = paisIngresado;
		banderaMenosHabitantes = false;
	}
	
	//c)la cantidad de paises de america que tienen menos de 0 grados.
	switch(continente){
		case "america":
			if(temperatura < 0){
				cantidadPaisesAmericanosFrios = cantidadPaisesAmericanosFrios + 1;
			}
			break;
	}

	//e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
	if(banderaTemperaturaMinimaIngresada == true || temperaturaMinima > temperatura){
		temperaturaMinima = temperatura;
		paisConMinimaTempIngresada = paisIngresado;
		banderaTemperaturaMinimaIngresada = false;
	}

	//d)el promedio de habitantes entre los paises ingresados.
	acumuladorHabitantes = acumuladorHabitantes + habitantes;
}

promedioHabitantes = acumuladorHabitantes / 5;

document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
document.write("El nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>");
document.write("la cantidad de paises de america que tienen menos de 0 grados: " + cantidadPaisesAmericanosFrios + "<br>");
document.write("el promedio de habitantes entre los paises ingresados: " + promedioHabitantes + "<br>");
document.write("la temperatura mínima ingresada es: " + temperaturaMinima + " y nombre del pais que registro esa temperatura: " + paisConMinimaTempIngresada);
}