/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Ivanna Alderete - Div x*/
function FahrenheitCentigrados () 
{
	let TemperaturaF;
    let TemperaturaC;

    TemperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    TemperaturaC = (TemperaturaF - 32) / 1.8;

    alert(TemperaturaF + " Fahrenheit son " + TemperaturaC.toFixed(2) + " grados centigrados "); 
}

function CentigradosFahrenheit () 
{
	let TemperaturaF;
    let TemperaturaC;

    TemperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);

    TemperaturaF = TemperaturaC * 1.8 + 32;

    alert(TemperaturaC + " grados centigrados son " + TemperaturaF.toFixed(2) + " Fahrenheit "); 
}

