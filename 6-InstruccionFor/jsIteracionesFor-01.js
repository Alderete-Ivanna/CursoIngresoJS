function mostrar()
{/* guarderia los nenes a inscribir:
	nombre
	edad(en meses)
	sexo
	si esta vacunado o no

	1)el nombre del mas joven 
	2)la cantidad de nenes vacunados (solo si hay)
	3)discriminar el sexo (solo si hay un sexo)
	4)el mayor con vacunas (solo si hay vacunados)*/

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
		//4)el mayor con vacunas (solo si hay vacunados)*/
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

	document.write("El mayor con vacunas (solo si hay vacunados) es: " + nombreDelMayorConVacunas + " y su edad es: " + edadMax +"<br>");


}