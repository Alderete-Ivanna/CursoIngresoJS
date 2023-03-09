function mostrar()
{
/*Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
	
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/

let respuesta = 'si';
let tipo;
let nombre;
let nombreImporteMax;
let nombrePesoMaxComestibles;
let nombreElaboradoMin;
let importe;
let importeMax;
let procedencia;
let peso;
let pesoMaxComestibles;
let elaboradoMin;
let mercaderiaMasAparece;
let porcentajeProductosElaborados;
let promedioPesoLimpieza;
let promedioPesoComestibles;
let promedioPesoOtros;

let acumuladorLimpieza = 0;
let acumuladorPreciosOtros = 0;
let acumuladorPreciosComestibles = 0;
let contadorLimpieza = 0;
let contadorOtros = 0; 
let contadorTotal = 0;
let contadorComestibles = 0;
let contadorElaborado = 0;
let acumuladorPesoLimpieza = 0;
let acumuladorPesoComestible = 0;
let acumuladorPesoOtros = 0;
let banderaComestibles = true;
let banderaMaxTodos = true;
let banderaElaborados = true;

	while(respuesta == 'si'){

		tipo = prompt("ingrese tipo de producto entre, limpieza, comestible, otros");
		while(tipo != "limpieza" && tipo != "comestible" && tipo != "otros"){
			tipo = prompt("ingrese tipo de producto entre, limpieza, comestible, otros");
		}

		nombre = prompt("ingrese el nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("ingrese el nombre :");
		}

		importe = parseInt(prompt("ingrese importe del producto no mayor a $1000"));
		while(isNaN(importe) || importe > 1000 || importe < 0){
			importe = parseInt(prompt("ingrese importe del producto no mayor a $1000"));
		}

		procedencia = prompt("ingrese procedencia del producto entre, importado, nacional, elaborado");
		while(procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado"){
			procedencia = prompt("ingrese procedencia del producto entre, importado, nacional, elaborado");
		}

		peso = parseInt(prompt("ingrese peso no mayor a 30 kilos "));
		while(isNaN(peso) || peso > 30 || peso < 1){
			peso = parseInt(prompt("ingrese peso no mayor a 30 kilos "));
		}

		switch (tipo){
			case "limpieza":
				contadorLimpieza++;
				acumuladorLimpieza = acumuladorLimpieza + importe;
				break;
			case "comestible":
				//a) el nombre del mas pesado de los comestibles.
				if (banderaComestibles == true || peso > pesoMaxComestibles){
					pesoMaxComestibles = peso;
					nombrePesoMaxComestibles = nombre;
					banderaComestibles = false;
				}
				contadorComestibles++;
				acumuladorPreciosComestibles = acumuladorPreciosComestibles + importe;
				break;
			case "otros":
				contadorOtros++;
				acumuladorPreciosOtros = acumuladorPreciosOtros + importe;
				break;
		}

		//b) el NOMBRE del mas caro de todos los productos
		if (banderaMaxTodos == true || importe > importeMax) {
			importeMax = importe;
			nombreImporteMax = nombre;
			banderaMaxTodos = false;
		}
		//c) el NOMBRE del mas barato de los elaborados
		if (procedencia == "elaborado"){
			if (banderaElaborados == true || importe < elaboradoMin) {
				elaboradoMin = importe;
				nombreElaboradoMin = nombre;
				banderaElaborados = false;
			}
			contadorElaborado++;
		}
		contadorTotal++;
	
		respuesta = prompt("desea continuar? ponga si o no");
	}//fin del while.

	//d)el tipo de mercadería que mas aparece
	if (contadorComestibles > contadorLimpieza && contadorComestibles > contadorOtros) {
		mercaderiaMasAparece = "Comestibles";
	} else if (contadorLimpieza > contadorOtros){
		mercaderiaMasAparece = "Limpieza";
	} else {
		mercaderiaMasAparece = "Otros";
	}

	//e)el porcentaje de productos elaborados por sobre el total
	if (contadorElaborado > 0){
		porcentajeProductosElaborados = contadorElaborado / contadorTotal * 100
	}
	//f) el promedio de pesos por cada tipo ingresado
	if (contadorLimpieza > 0){
		promedioPesoLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
	}
	if (contadorComestibles > 0){
		promedioPesoComestibles = acumuladorPesoComestible / contadorComestibles;
	}
	if (contadorOtros > 0){
		promedioPesoOtros = acumuladorPesoOtros / contadorOtros;
	} 
	
	//a) el NOMBRE del mas pesado de los comestibles
	if (contadorComestibles > 0){
		document.write("El nombre del más pesado de los comestibles es: " + nombrePesoMaxComestibles + "<br>");
	}  

	document.write("El nombre del más caro de todos los productos es: " + nombreImporteMax + "<br>"); 

	if (contadorElaborado > 0){
		document.write("El nombre del más barato de los elaborados es: " + nombreElaboradoMin);
	}

	document.write("El tipo de mercadería que más aparece es: " + mercaderiaMasAparece + "<br>");

	if (contadorElaborado > 0){
		document.write("el porcentaje de productos elaborados por sobre el total es: " + porcentajeProductosElaborados.toFixed(2) + "<br>");
	} 

	if (contadorLimpieza > 0){
		document.write("El promedio de pesos de los productos de limpieza es: " + promedioPesoLimpieza + "<br>");
	} 

	if (contadorComestibles > 0){
		document.write("El promedio de pesos de los productos comestibles es: " + contadorComestibles + "<br>");
	} 

	if (contadorOtros > 0){
		document.write("El promedio de pesos de los productos de tipo 'otros' es: " + promedioPesoOtros);
	} 
}
