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
	Pedir datos por prompt y mostrar la información por document.write.*/

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
	document.write("promedio total del precio: " + promedio);
	
}