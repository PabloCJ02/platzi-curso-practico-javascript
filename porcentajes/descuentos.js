//const precioOriginal = 120;
//const descuento = 18;

const cupones = [
    "Skyshock100",
    "Robertomtz",
    "MYM_tumtum",
]


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

 function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento;

    switch(cuponValue){
        case cupones[0]: 
            descuento = 50;
            break;
        case cupones[1]:
            descuento = 25;
            break;
        case cupones[2]:
            descuento = 15
            break;
    }


    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}




//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});