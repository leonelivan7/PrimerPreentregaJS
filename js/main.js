function cotizacion() {
    let pregunta = prompt("¡Hola, bienvendo! Con que moneda desea operar? \n 1)Dolar \n 2)Euro \n 3)Real");
    if (pregunta == 1) {
            let pregunta2 = prompt("Que cotización queres saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del dolar es 1350");
            } else if (pregunta2 == 2) {
                alert("La cotización del dolar es 1330");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Queres seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else if {
                alert("Gracias por operar con nosotros!)")
        }
    else if (pregunta == 2){
            let pregunta2 = prompt("Que cotización queres saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del euro es 1500");
            } else if (pregunta2 == 2) {
                alert("La cotización del euro es 1600");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Queres seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else if {
                alert("Gracias por operar con nosotros!)")
    } else if (pregunta == 3){
            let pregunta2 = prompt("Que cotización queres saber? \n 1)Compra \n 2)Venta");
            if (pregunta2 == 1) {
                alert("La cotización del real es 200");
            } else if (pregunta2 == 2) {
                alert("La cotización del real es 270");
            } else {
                alert("Operación invalida");
            }
            let pregunta3 = confirm("Queres seguir operando?");
            if (pregunta3 === true) {
                cotizacion();
            } else if {
                alert("Gracias por operar con nosotros!)")
    } else {
        alert("Operación invalida");
    }
}

cotizacion();
