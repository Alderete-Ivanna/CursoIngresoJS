 //Ivanna Alderete - Div x//
function CalcularPrecio () 
{
    let Cantidad;
    const VALOR_UNIDAD = 35;
    let PrecioFinal;
    let Marca;
    let Descuento;
    let IIBB;

    Marca = document.getElementById("Marca").value;

    Cantidad = parseInt(document.getElementById("txtIdCantidad").value);

if ( Cantidad >= 6){

        Descuento = (VALOR_UNIDAD * Cantidad) * 50 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }
    
else if ( Cantidad == 5){

     if ( Marca == "ArgentinaLuz" ){

        Descuento = (VALOR_UNIDAD * Cantidad) * 40 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }
     if(Marca != "ArgentinaLuz"){
    
        Descuento = (VALOR_UNIDAD * Cantidad) * 30 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }
}
else if ( Cantidad == 4 ){

     if( Marca == "ArgentinaLuz" || Marca == "FelipeLamparas" ){
        Descuento = (VALOR_UNIDAD * Cantidad) * 25 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }

     if ( !(Marca == "ArgentinaLuz" || Marca == "FelipeLamparas")){

            Descuento = (VALOR_UNIDAD * Cantidad) * 20 / 100;
            PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }
}
else if ( Cantidad == 3){
     if ( Marca == "ArgentinaLuz" ){

        Descuento = (VALOR_UNIDAD * Cantidad) * 15 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;  
    }
    else if (Marca == "FelipeLamparas"){
        Descuento = (VALOR_UNIDAD * Cantidad) * 10 / 100;
        PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;
    }               
     
     else {
                Descuento = (VALOR_UNIDAD * Cantidad) * 5 / 100;
                PrecioFinal = (VALOR_UNIDAD * Cantidad) - Descuento;  
    }
}
if( PrecioFinal > 120){
    IIBB = PrecioFinal * 10 / 100;
    PrecioFinal = PrecioFinal + IIBB
    alert("Usted pago $" + IIBB + " de IIBB"); 
}
    document.getElementById("txtIdprecioDescuento").value = PrecioFinal;

}
