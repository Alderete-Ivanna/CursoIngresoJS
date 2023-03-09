function mostrar()
{
    /*(Ivanna Alderete). 2) De 10 corredores de atletismo se deben ingresar y validar los siguientes datos:
	nombre
	edad
	tiempo(dato entero expresado en segundos)
	sexo

Informar:

a) El nombre del hombre con más tiempo(si lo hay).

b) El promedio de la edad de todos los participantes.

c) La cantidad de corredores de sexo femenino.*/

let nombre;
let nombreDelHombreConMaxTiempo;
let edad;
let tiempo;
let tiempoMax;
let sexo;
let promedioEdades = 0;

let banderaHombreConMaxTiempo = true;
let acumuladorEdad = 0;
let contadorFemenino = 0;

for (let i = 0; i < 10; i++){

	nombre = prompt("Ingrese su nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("Ingrese su nombre:");
		}

	edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad) || edad < 18 || edad > 60){
			edad = parseInt(prompt("ingrese su edad"));
		}

	tiempo = prompt("ingrese su tiempo, en segundos");
		while(isNaN(tiempo) || tiempo < 10){
			tiempo = prompt("ingrese su tiempo, en segundos");
		}
	
	sexo = prompt("ingrese su sexo, f o m");
		while(!isNaN(sexo) || sexo!='f' && sexo!='m'){
			sexo = prompt("ingrese su sexo, f o m");
		}

	//a) El nombre del hombre con más tiempo(si lo hay).
	if(sexo=='m')
	{
		if(banderaHombreConMaxTiempo==true || tiempoMax < tiempo)
		{
			tiempoMax = tiempo;
			nombreDelHombreConMaxTiempo = nombre;
			banderaHombreConMaxTiempo = false;
		}
	}

	// b) El promedio de la edad de todos los participantes.

	acumuladorEdad = acumuladorEdad + edad;

	//c) La cantidad de corredores de sexo femenino.
	if(sexo=='f')
	{
		contadorFemenino++;
	}

}

	promedioEdades = acumuladorEdad /10;

	if(banderaHombreConMaxTiempo==true)
	{
		document.write("El nombre del hombre con más tiempo es: no hay." + "<br>");
	}
	else
	{
		document.write("El nombre del hombre con más tiempo es: " + nombreDelHombreConMaxTiempo + "<br>");
	}

	document.write("El promedio de la edad de todos los participantes es: " + promedioEdades + "<br>");
	document.write("La cantidad de corredores de sexo femenino es: " + contadorFemenino + "<br>");
}