function mostrar(){
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
document.write("la temperatura mínima ingresada es: " + temperaturaMinima + " y nombre del pais que registro esa temperatura: " + paisConMinimaTempIngresada);*/



	/*El alumno deberá ingresar: 
	Nombre
	Carrera (Programación, Psicología, Diseño gráfico) 
	Estado de la carrera: en curso-abandono-finalizado
	Sexo (femenino-masculino-nobinario)
	Edad (18 o más)
	Nota (entre 1 y 10) 
	Se desconoce la cantidad de alumnos que se ingresaran. El programa deberá informar:
	A. Cantidad total de alumnos de cada carrera. //uso CONTADOR POR CARRERA O UNO GENERAL!!!
	B. Cantidad total de mujeres que cursan la carrera de programación 
	C. Cantidad de alumnos no binarios. 
	D. Promedio de notas de los alumnos finalizantes.
	E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología. 
	F.Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.) 
	G. ¿Cuál es la carrera que tiene más alumnos?*/

	let respuesta = 'si';
	let mensaje;
	let nombre;
	let nombreAlumnoPsico;
	let nombreMejorAlumno;
	let carrera;
	let estado;
	let estadoMejorAlumno;
	let sexo;
	let sexoAlumnoPsico;
	let edad;
	let edadMaxPsico;
	let nota;
	let notaMejorAlumno;
	let promedio;

	let contadorDiseñoGrafico = 0;
	let contadorProgramacion = 0;
	let contadorFprogramacion = 0;
	let contadorPsicologia = 0;
	let contadorNb = 0;
	let contadorFinalizantes = 0;
	let acumuladorFinalizantes = 0;

	let banderaAlumnoEdadMax = true;
	let banderaMejorAlumno = true;

	while(respuesta == 'si'){

		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		carrera = prompt("ingrese su carrera, programacion, psicologia, diseño grafico");
		while(carrera != "programación" && carrera != "psicologia" && carrera != "diseño grafico"){
			carrera = prompt("ingrese su carrera, programacion, psicologia, diseño grafico");
		}

		estado = prompt("ingrese el estado de la carrera, en curso, abandono, finalizado");
		while(estado != "en curso" && estado != "abandono" && estado != "finalizado"){
			estado = prompt("ingrese el estado de la carrera, en curso, abandono, finalizado");
		}

		sexo = prompt("ingrese su sexo, f, nb o m");
		while(sexo!='f' && sexo!='m' && sexo != "nb"){
			sexo = prompt("ingrese su sexo, f, nb o m");
		}

		edad = parseInt(prompt("ingrese la edad:"))
		while (edad < 18 || edad > 70) {
			edad = parseInt(prompt("ingrese la edad:"));
		}

		nota = parseInt(prompt("ingrese su nota entre 1 y 10"));
		while(isNaN(nota) || nota < 1 || nota > 10){
			nota = parseInt(prompt("ingrese su nota entre 1 y 10"));
		}

		switch(carrera){
			case "diseño grafico":
				contadorDiseñoGrafico++;
			break;
			case "programación":
				if(sexo == "f" && estado == "en curso"){
					contadorFprogramacion++;
				}

				contadorProgramacion++;
			break;
			case "psicologia":
				if((banderaAlumnoEdadMax==true||edadMaxPsico<edad)){
					edadMaxPsico = edad;
					nombreAlumnoPsico = nombre;
					sexoAlumnoPsico = sexo;
					banderaAlumnoEdadMax = false;
				}

				contadorPsicologia++;

				if(sexo == "nb" && (banderaMejorAlumno == true || notaMejorAlumno < nota)){
					notaMejorAlumno = nota;
					nombreMejorAlumno = nombre;
					estadoMejorAlumno = estado;
					banderaMejorAlumno = false;
				}
			break;

		}

		if(sexo == "nb"){
			contadorNb++;
		}

		if(estado == "finalizado"){
			contadorFinalizantes++;
			acumuladorFinalizantes = acumuladorFinalizantes + nota;
		}
		respuesta=prompt("desea continuar? ponga si o no");
	}//fin del while.

	cantidadTotal = contadorDiseñoGrafico + contadorProgramacion + contadorPsicologia;

	promedio = acumuladorFinalizantes / contadorFinalizantes;

	if(contadorDiseñoGrafico>contadorProgramacion && contadorDiseñoGrafico>contadorPsicologia){
		mensaje = "diseño grafico";
	}
	else if(contadorProgramacion>contadorPsicologia)
	{
			mensaje = "programacion";
	}
	else{
			mensaje = "psicologia";
	}


	

	if(contadorFprogramacion != 0){
		document.write("Cantidad total de mujeres que cursan la carrera de programación es: " + contadorFprogramacion + "<br>");
	}
    else{
		document.write("No se registro ninguna mujer en programacion");
	}

	if(contadorNb != 0){
		document.write("La cantidad de alumnos no binarios es: " + contadorNb + "<br>");
	}
	else{
		document.write("No se registro ningun alumno nb");
	}

	if(contadorPsicologia !=0){
		document.write("El nombre del alumno más viejo de psicologia es: " + nombreAlumnoPsico + " y su sexo es: " + sexoAlumnoPsico + " y tiene " + edadMaxPsico + " años " + "<br>");
	}
	else{
		document.write("No se registro alumnos en la carrera de psicologia");
	}


	if(contadorNb !=0){
		document.write("El nombre del alumno nb de mejor nota es: " + nombreMejorAlumno + " su nota es: " + notaMejorAlumno + " -Estado de la carrera: " + estadoMejorAlumno + "<br>");
	}
	else{
		document.write("No se registraron alumnos no binarios")
	}


	document.write("La cantidad total de alumnos de cada carrera es: " + cantidadTotal + "<br>");
	document.write("Promedio de notas de los alumnos finalizantes es: " + promedio + "<br>");
	document.write("La carrera que tiene más alumnos es: " + mensaje + "<br>");
}
