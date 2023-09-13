alert ("Bienvenido al restaurant el mondonguito feliz")
var Entrada = parseInt(prompt("Ingrese el monto de la entrada:" ));
var Segundo = parseInt(prompt("Ingrese el monto del 2°:" ));
var Postre = parseInt(prompt("Ingrese el monto del postre:" ));
alert("Hagamos las cuentas!")

console.log("El costo de la entrada: "+Entrada);
console.log("El costo del 2°: "+Segundo);
console.log("El costo del postre: "+Postre);

var Total = Entrada+Segundo+Postre;
console.log("Monto neto: "+Total);

var IGV = Total*0.18;
console.log("IGV:"+IGV)

var Monto = Total+IGV
console.log("El monto total de tu pedido es de:"+Monto)

console.log("Gracias por venir al mondongo feliz :)")

