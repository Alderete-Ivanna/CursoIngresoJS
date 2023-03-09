function mostrar()
{
/*(Ivanna Alderete). 3) Se ingresa una cantidad indeterminada de ventas realizadas por las distintas sucursales de un Mayorista, validando los datos ingresados:
	nombre del cliente
	sucursal( “CABA”, “BS.AS.” o “INTERIOR”)
	tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”)
	monto de venta en Pesos

Informar:

a) El nombre del cliente al que se le vendió menos.

b) El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c) La sucursal con más cantidad de ventas.*/

let respuesta = 'si';
let nombre;
let nombreMenosVenta;
let sucursal;
let sucursalMasV;
let tipo;
let monto;
let mayorMonto
let promedioDeMonto;
let menosVendido;

let contadorDeTipoPequeña = 0;
let acumuladorVentas = 0;
let banderaSucursalMasV = true;
let banderaMenosVenta = true;

	while(respuesta == 'si'){

		nombre = prompt("Ingrese su nombre :");
		while (!isNaN(nombre)){
			nombre = prompt("Ingrese su nombre:");
		}

		sucursal = prompt("ingrese su surcursal, entre caba, bsas y interior");
		while(!(sucursal == "caba" || sucursal == "bsas" || sucursal == "interior")){
			sucursal = prompt("ingrese su surcursal, entre caba, bsas y interior");
		}

		tipo = prompt("ingrese su tipo de venta, entre grande, mediana o pequeña");
		while(!(tipo == "grande" || tipo == "mediana" || tipo == "pequeña")){
			tipo = prompt("ingrese su tipo de venta, entre grande, mediana o pequeña");
		}

		monto = prompt("ingrese su monto entre $500 y $12000")
		while(!(monto > 500 || monto < 12000 )){
			monto = prompt("ingrese su monto entre $500 y $12000")
		}

		//a) El nombre del cliente al que se le vendió menos.

		if(banderaMenosVenta==true || monto < menosVendido)
		{
			menosVendido=montoVenta;
			nombreMenosVenta=nombre;
			banderaMenosVenta=false;
		}

		//b) El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

		if(tipo == "pequeña"){
			acumuladorVentas = acumuladorVentas + monto;
			contadorDeTipoPequeña++;
			
		}

		//c) La sucursal con más cantidad de ventas.
		if(banderaSucursalMasV == true || mayorMonto > monto){
			mayorMonto = monto;
			sucursalMasV = sucursal;
			banderaSucursalMasV = false;
		}

		respuesta=prompt("desea continuar? ponga si o no");
	}

	promedioDeMonto = acumuladorVentas / contadorDeTipoPequeña;

	document.write("El nombre del cliente al que se le vendio menos es: " + nombreMenosVenta + "<br>");
	document.write("El promedio del monto de venta de las sucursales del tipo “PEQUEÑA” es " + promedioDeMonto + "<br>");
	document.write("La sucursal con más cantidad de ventas es: " + sucursalMasV);
}