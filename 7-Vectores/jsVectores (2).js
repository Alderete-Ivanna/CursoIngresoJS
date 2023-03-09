function mostrar()
{
    /*Reclutando IT" Un recruiter nos contrató para armale un programa para el ingreso indeterminado de candidatos. Se solicitan los siguientes datos:   
nombre,
edad,   
sexo(feminino, masculino, no binario)
lenguaje( “Python”, “C#” o “Javascript”),
donde aprendó a programar(“universitario”,”terciario”,“curso”). 
LAS VALIDACIONES SON A CRITERIO DEL PROGRAMADOR
Informar:
a)El promedio de edad de los que estudian Python.
b)La cantidad de mujeres que estudian C#
c)El promedio de personas que aprendieron a programar en la Universidad. universitarios / total = promedio
*/

let respuesta = 'si';
let nombre;
let edad;
let sexo;
let lenguaje;
let dondeAprendio;
let promedioUniversidad;
let promedioEdades;

let acumuladorEdad = 0;
let acumuladorUniversidad = 0;
let contadorPython = 0;
let contadorFemeninoC = 0;
let contadorUniversidad = 0;

	while(respuesta == 'si'){

        nombre = prompt("Ingrese el nombre :");
		while (!isNaN(nombre)) {
			nombre = prompt("Error: Ingrese el nombre :");
		}

        edad = parseInt(prompt("Ingrese la edad:"));
		while (edad < 18 || edad>50){
			edad = parseInt(prompt("Error: Ingrese la edad:"));
		}

        sexo = prompt("ingrese su sexo, f, m o nb");
		while(sexo!='f' && sexo!='m' && sexo!= 'nb'){
			sexo = prompt("ingrese su sexo, f, m o nb");
		}

        lenguaje = prompt("ingrese su lenguaje entre “Python”, “C#” o “Javascript”");
        while(lenguaje != "python" && lenguaje!="c" && lenguaje != "javascript"){
            lenguaje = prompt("ingrese su lenguaje entre “Python”, “C#” o “Javascript”");
        }

        dondeAprendio = prompt("ingrese donde estudio, universidad, terciario, curso");
        while(dondeAprendio != "universidad" && dondeAprendio != "terciario" && dondeAprendio != "curso"){
            dondeAprendio = prompt("ingrese donde estudio, universitario, terciario, curso");
        }

        //a)El promedio de edad de los que estudian Python.
        
        if(lenguaje == "python"){
            acumuladorEdad = acumuladorEdad + edad;
            contadorPython++;
        }

        //b)La cantidad de mujeres que estudian C#

        if(lenguaje == "c#" && sexo == "f"){
            contadorFemeninoC++;
        }

       //c)El promedio de personas que aprendieron a programar en la Universidad. 
       if(dondeAprendio == "universidad"){
        contadorUniversidad++;
        acumuladorUniversidad = acumuladorUniversidad + nombre;
       }
		respuesta=prompt("desea continuar? ponga si o no");
	}//fin del while.

    if(contadorUniversidad > 0){
        promedioUniversidad = acumuladorUniversidad / contadorUniversidad;
    }
    
    promedioEdades = acumuladorEdad / contadorPython;

    document.write("El promedio de edad de los que estudian Python es: " + promedioEdades + "<br>");
    document.write("La cantidad de mujeres que estudian C# es: " + contadorFemeninoC + "<br>");
    document.write("El promedio de personas que aprendieron a programar en la Universidad es: " +  promedioUniversidad);
}