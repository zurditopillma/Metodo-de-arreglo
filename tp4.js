let precios = [150, 230, 345, 460, 550, 180, 390, 275, 430];
let preciosAumentados = precios.map(precio => precio * 1.15);

let preciosIguales230 = preciosAumentados.filter(precio => precio === 230);
let preciosEntre300y500 = preciosAumentados.filter(precio => precio >= 300 && precio <= 500);
let preciosMayores400 = preciosAumentados.filter(precio => precio > 400);
let preciosMenores200 = preciosAumentados.filter(precio => precio < 200);
let preciosDistintos345 = preciosAumentados.filter(precio => precio !== 345);
let preciosNo460 = preciosAumentados.filter(precio => precio !== 460);
let preciosMayores500oMenores200 = preciosAumentados.filter(precio => precio > 500 || precio < 200);
let preciosCategoria345 = preciosAumentados.filter(precio => precio === 345);

console.log("Precios iguales a 230:", preciosIguales230);
console.log("Precios entre 300 y 500:", preciosEntre300y500);
console.log("Precios mayores a 400:", preciosMayores400);
console.log("Precios menores a 200:", preciosMenores200);
console.log("Precios distintos a 345:", preciosDistintos345);
console.log("Precios que no son 460:", preciosNo460);
console.log("Precios mayores a 500 o menores a 200:", preciosMayores500oMenores200);
console.log("Precios iguales a 345:", preciosCategoria345);

