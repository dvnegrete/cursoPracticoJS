const coupons = [
    {
        name : "JuanDC",
        discount : 15,
    },
    {
        name : "damian",
        discount : 30,    
    },
    {
        name : "tienda",
        discount : 25,
    },
]

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCuponValueValid = function (coupon){
        return coupon.name === couponValue;
    }
    
    const userCoupon = coupons.find(isCuponValueValid);

    if (!userCoupon) {        
        const resultP = document.getElementById("ResultP");
        resultP.innerHTML = `El cupón ${couponValue} no es valido. Verificalo por favor.`;
        alert(`El Cupón ${couponValue} no es valido`);
    } else {
        const descuento = userCoupon.discount;    
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerHTML = `Tienes un descuento de ${descuento}%. <br> Precio con descuento incluido: <b>$${precioConDescuento.toFixed(2)}<b/>`;    
    }    

    
    //Proyecto. Dar formato separador de miles a resultP

    /* var precioString = Array.from(precioConDescuento.toString());
    console.log("longitud de Array: " + precioString.length);
    var centavos;
    console.log(`Antes del while tiene valor de: ${precioString}`);

    while (true) {
        if (precioString.lastIndexOf() === ".") {
            precioString.pop();
            console.log("if de LastIndexOf()")
            break;
        }   else if (precioString.forEach("1")) {
            console.log("else if de ForEach()")
            centavos = precioString
            precioString.pop();
        } else {
            console.log("sale del while. Es un else")
            break;
        }
    }    
    console.log("Fuera del while. Su valor: "+ precioString); */    
}