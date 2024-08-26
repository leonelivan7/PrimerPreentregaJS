function cotizacion() {
    let pregunta = prompt("¡Hola, bienvenido! Con que moneda desea operar? \n 1)Dolar \n 2)Euro \n 3)Real");
    if (pregunta == 1) {
            let pregunta2 = prompt("Que cotización quiere saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del dolar para la compra es 1350");
            } else if (pregunta2 == 2) {
                alert("La cotización del dolar para la venta es 1330");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Quiere seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else {
                alert("¡Gracias por operar con nosotros!");
            }
        }
    else if (pregunta == 2){
            let pregunta2 = prompt("Que cotización quiere saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del euro para la compra es 1500");
            } else if (pregunta2 == 2) {
                alert("La cotización del euro para la venta es 1600");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Quiere seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else {
                alert("Gracias por operar con nosotros");
            }
    } else if (pregunta == 3){
            let pregunta2 = prompt("Que cotización quiere saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del real para la compra es 200");
            } else if (pregunta2 == 2) {
                alert("La cotización del real para la venta es 270");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Quiere seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else {
                alert("Gracias por operar con nosotros");
            }
    } else {
        alert("Operación invalida");
    }
}

cotizacion();
