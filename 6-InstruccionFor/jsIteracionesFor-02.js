function mostrar()
{ 
    /*2) Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al
	siguiente detalle:
	● Tipo de PC (“DESKTOP” o “LAPTOP”)
	● Marca (“DELL”, “HP”, “ACER”)
	● Modelo
	● Precio (No puede ser menor a 100.000 pesos)
	Informar:
	a) El precio de la PC más cara.
	b) La cantidad total de PC de tipo LAPTOP cuya marca es DELL.
	c) El promedio total del precio.
	Pedir datos por prompt y mostrar la información por document.write.

	let tipoDePc;
	let marca;
	let modelo;
	let precio;
	let acumuladorPrecio = 0;
	let contadorPrecio = 0;
	let contadorDell = 0;
	let precioMax;
	let respuesta = 'si'
	let pcMasCaro;
	let banderaPcMasCaro = true;
	let promedio;
	

	
	while(respuesta == 'si'){

		tipoDePc = prompt("Ingrese tipo de Pc (“DESKTOP” o “LAPTOP”)");
		while(tipoDePc != "DESKTOP" && tipoDePc != "LAPTOP"){
		
			tipoDePc = prompt("Error. Ingrese tipo de Pc (“DESKTOP” o “LAPTOP”)");
		}
		marca = prompt("Ingrese marca de Pc (DELL, HP, ACER)");
		while(marca != "DELL" && marca != "HP" && marca != "ACER"){
	
			marca = prompt("Error. Ingrese marca de Pc (DELL, HP, ACER)");
		
		}
		modelo = prompt("Ingrese modelo de Pc: Mac, TopHouse");
		while(modelo != "Mac" && modelo != "TopHouse"){
	
			modelo = prompt("Error. Ingrese modelo de Pc: Mac, TopHouse");
	
		}
		precio = parseInt(prompt("Ingrese Precio no menos a 100.000$"));
		while(isNaN(precio) || precio<100000){
			
			precio = parseInt(prompt("Error. Ingrese Precio no menos a $100.000"));
		}

		//a) El precio de la PC más cara.
		if(banderaPcMasCaro == true || precio > precioMax){
			precioMax = precio;
			pcMasCaro = precioMax;
			banderaPcMasCaro=false;	
		}
		
		//b) La cantidad total de PC de tipo LAPTOP cuya marca es DELL.
		if(tipoDePc = "LAPTOP" && marca=="DELL"){
			contadorDell++;
		}

		//c) El promedio total del precio.
		acumuladorPrecio = acumuladorPrecio + precio;
		contadorPrecio++;
		
		respuesta = (prompt("Quiere seguir continuando? escriba si/no"));
	}

	
	promedio = acumuladorPrecio/contadorPrecio;
	
	document.write("El precio de la pc más cara es: " + pcMasCaro + "<br>");
	document.write("La cantidad total de PC de tipo LAPTOP cuya marca es DELL es " + contadorDell + "<br>");
	document.write("promedio total del precio: " + promedio); */




	/*Realizar el algoritmo que permita ingresar los datos de los alumnos de 
	una division de la UTN FRA, los datos solicitados son:
	Nombre
	Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
	Cantidad de materias( mas de cero y menos de 8)
	Sexo ( femenino , masculino , no binario)
	Nota promedio (entre 0 y 10)
	Edad (validar)
	Se debe informar de existir, o informar que no existe , en el caso que corresponda.
	a) El nombre del mejor promedio de los que tarbajan o estan buscando
	b) El nombre del mas viejo de los alumnos que solo sea estudiantes
	c) El promedio de nota por situacion laboral
	d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo */

	let respuesta = 'si';
	let nombre;
	let nombreMateriasMin;
	let nombreDelEstudianteMayor;
	let nombreMejorPromedio;
	let situacion;
	let materias;
	let materiasMin;
	let sexo;
	let nota;
	let mejorPromedio;
	let edad;
	let edadMateriasMin;
	let edadMayor;
	let promedioTrabajando;
	let promedioBuscando;
	let promedioEstudiante;

	let banderaMejorPromedio = true;
	let banderaEstudianteMayor = true;
	let banderaMenosMaterias = true;

	let contadorBuscando = 0;
	let contadorEstudiante = 0;
	let contadorTrabajando = 0;
	let acumuladorBuscando = 0;
	let acumuladorEstudiante = 0;
	let acumuladorTrabajando = 0;

	while(respuesta == 'si'){

		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		situacion = prompt("ingrese situación laboral entre, buscando, trabajando o solo estudiante");
		while(situacion != "buscando" && situacion != "trabajando" && situacion != "solo estudiante"){
			situacion = prompt("ingrese situación laboral entre, buscando, trabajando o solo estudiante");
		}

		materias = parseInt(prompt("ingrese cantidad de materias, mas de 0 y menos de 8"));
		while(isNaN(materias) || materias<0 || materias>8){
			materias = parseInt(prompt("ingrese cantidad de materias, mas de 0 y menos de 8"));
		}

		sexo = prompt("ingrese su sexo, f, nb o m");
		while(sexo!='f' && sexo!='m' && sexo != "nb"){
			sexo = prompt("ingrese su sexo, f, nb o m");
		}

		nota = parseInt(prompt("ingrese su nota entre 0 y 10"));
		while(isNaN(nota) || nota < 0 || nota > 10){
			nota = parseInt(prompt("ingrese su nota entre 0 y 10"));
		}

		edad = parseInt(prompt("ingrese la edad:"))
		while (edad < 18 || edad > 56){
			edad = parseInt(prompt("ingrese la edad:"));
		}

		//a) El nombre del mejor promedio de los que tarbajan o estan buscando

		if(situacion == "trabajando" || situacion == "buscando"){
			if(banderaMejorPromedio == true || nota > mejorPromedio){
				mejorPromedio = nota;
				nombreMejorPromedio = nombre;
				banderaMejorPromedio = false;
			}
		}

		//b) El nombre del mas viejo de los alumnos que solo sea estudiantes

		if(situacion == "solo estudiante" && (banderaEstudianteMayor == true || edad > edadMayor)){
			edadMayor = edad;
			nombreDelEstudianteMayor = nombre;
			banderaEstudianteMayor = false;
		}

		//c) El promedio de nota por situacion laboral

		switch(situacion){
			case "trabajando":
				contadorTrabajando++;
				acumuladorTrabajando = acumuladorTrabajando + nota;
			break;
			
			case "buscando":
				contadorBuscando++;
				acumuladorBuscando = acumuladorBuscando + nota;
			break;
			
			case "solo estudiante":
				contadorEstudiante++;
				acumuladorEstudiante = acumuladorEstudiante + nota;
			break;
		}

		//d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

		if(situacion == "buscando" && (banderaMenosMaterias == true || materias < materiasMin)){
			materiasMin = materias;
			edadMateriasMin = edad;
			nombreMateriasMin = nombre;
			banderaMenosMaterias = false;
		}
		respuesta = prompt("desea continuar? ponga si o no");

	}//fin del while.
	
	if(contadorTrabajando > 0){
		promedioTrabajando = acumuladorTrabajando / contadorTrabajando;
	}
	else{
		promedioTrabajando = 0;
	}

	if(contadorBuscando > 0){
		promedioBuscando = acumuladorBuscando / contadorBuscando;
	}
	else{
		promedioBuscando = 0;
	}
	if(contadorEstudiante > 0){
		promedioEstudiante = acumuladorEstudiante / contadorEstudiante;
	}
	else{
		promedioEstudiante = 0;
	}


	if(contadorBuscando > 0 || contadorTrabajando > 0){
		document.write("El nombre del mejor promedio de los que tarbajan o estan buscando es: " + nombreMejorPromedio + "<br>");
	}
	else{
		document.write("No se ingreso alumnos con esas situaciones");
	}
	
	if(contadorEstudiante > 0){
		document.write("El nombre del mas viejo de los alumnos que solo sean estudiantes es: " + nombreDelEstudianteMayor + "<br>");
	}
	else{
		document.write("No se ingreso alumnos que sean estudiantes");
	}

	document.write("promedio de nota de los que estan buscando trabajo es: " + promedioBuscando.toFixed(1) + "<br>");
	document.write("promedio de nota de los que estan trabajando es: " + promedioTrabajando.toFixed(1) + "<br>");
	document.write("promedio de nota de los que son estudiantes es: " + promedioEstudiante.toFixed(1) + "<br>");
   
	if(contadorBuscando > 0){
		document.write("La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo es: " + edadMateriasMin + " y su nombre es: " + nombreMateriasMin + "<br>");
	}
	else{
		document.write("No se ingreso alumnos que esten buscando trabajo");
	}
    
   
}	