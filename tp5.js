//ACT1
document.write(("1)Dado un arreglo de notas de un alumno, utiliza el método reduce para calcular lasuma total de las notas y el promedio"));
// Paso 1: Declarar el arreglo con las notas
const notas = [7.5, 8.5, 9.5, 6.5, 10];

// Paso 2: Usar el método reduce para calcular la suma total
const sumaTotal = notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

// Paso 3: Calcular el promedio
const promedio = sumaTotal / notas.length;

// Imprimir los resultados en formato monetario y con dos decimales
console.log(`Suma total de las notas: $${sumaTotal.toFixed(2)}`);
console.log(`Promedio de las notas: $${promedio.toFixed(2)}`);

document.write(("<br>----------------------------------------</br>"));
document.write("T.P1 7.5 <br> T.P2 8.5 <br> T.P3 9.5 <br> T.P4 6.5 <br> Evaluacion 10");
document.write(("<br>----------------------------------------</br>"));
document.write("Suma total de notas: ", sumaTotal);
document.write(("<br></br>"));
document.write("Promedio de notas: ", promedio);
document.write(("<br>----------------------------------------</br>"));

//ACT2
document.write(("2)Calcular el monto a pagar de una compra de componentes de una PC, teniendo en cunta que los valores se encuentran guardados en un arreglo de precios. "));
// Arreglo de precios de los componentes
let precios = [
    150548,
    100147,
    51254,
    255500.45,
    35.45,
    78.8
];

// Utilizamos el método reduce para calcular la suma total de los precios
const montoTotal = precios.reduce((acumulador, precio) => acumulador + precio, 0);

// Función para dar formato en pesos, redondeando a dos decimales
function formatearPeso(valor) {
    return `$${valor.toFixed(2)}`; // Dos decimales para formatos monetarios
}

// Mostramos el monto total a pagar
console.log(`Monto total a pagar: ${formatearPeso(montoTotal)}`);
document.write(("<br>----------------------------------------</br>"));
document.write("$150.548 <br> $100.147 <br> $51.254 <br> $255.500,45 <br> $35,45 <br> $78,8");
document.write(("<br>----------------------------------------</br>"));
document.write("Monto a total a pagar: $", montoTotal);
document.write(("<br>----------------------------------------</br>"));

//ACT3
document.write(("3)Cargar la suma total de bolsas de manzanas por kg. "));
// Paso 1: Declarar el arreglo con los pesos de las bolsas en formato de cadena
const bolsas = ["3,34568 kg", "2,45678 Kg", "4,8765 Kg", "1,548kg", "3,78kg", "7,74kg"];

// Paso 2: Limpiar y convertir las cadenas a números flotantes
const pesos = bolsas.map(bolsa => 
  parseFloat(bolsa.replace(/[^\d,]/g, '').replace(',', '.'))
);

// Paso 3: Usar el método reduce para calcular la suma total
const sumaTotalPesos = pesos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

// Paso 4: Imprimir el total en formato con dos decimales
console.log(`Suma total de bolsas de manzanas: ${sumaTotalPesos.toFixed(2)} kg`);
document.write(("<br>----------------------------------------</br>"));
document.write("3,34568 kg <br> 2,45678 Kg <br> 4,8765 Kg <br> 1,548kg <br> 3,78kg <br> 7,74kg");
document.write(("<br>----------------------------------------</br>"));
document.write("Suma total de bolsas de manzanas: ", sumaTotalPesos, 'kg');
document.write(("<br>----------------------------------------</br>"));

//ACT4
document.write(("4)En este ejercicio, deberás calcular el total de ingresos mensuales a partir de un arreglo que contenga los ingresos diarios. Utiliza el método reduce para sumar todos los ingresos diarios y obtener el total mensual. "));
document.write(("<br>----------------------------------------</br>"));
// Paso 1: Declarar el arreglo con los ingresos diarios en formato de cadena
const ingresosDiarios = ["$10.000", "$15.000", "$17.500", "$20.000", "$25.000"];

// Paso 2: Limpiar y convertir las cadenas a números flotantes
const ingresosNumericos = ingresosDiarios.map(ingreso => 
  parseFloat(ingreso.replace(/[$.,]/g, '').replace(',', '.')) // Limpia el símbolo $ y convierte las comas en puntos
);

// Paso 3: Usar el método reduce para calcular la suma total
const totalMensual = ingresosNumericos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

// Paso 4: Imprimir el total en formato monetario con dos decimales
console.log(`Total de ingresos mensuales: $${totalMensual.toFixed(2)}`);
document.write("$10.000 <br> $15.000 <br> $17.500 <br> $20.000 <br> $25.000");
document.write(("<br>----------------------------------------</br>"));
document.write("Total de ingresos mensuales: $", totalMensual);
document.write(("<br>----------------------------------------</br>"));

//ACT5
document.write(("5)En una estación de servicios se necesita llevar un registro diario de los litros de combustible que se ingresan en el tanque de almacenamiento. Utiliza el método reduce y escribe un programa que calcule el total de combustible ingresado durante una semana. "));
// Paso 1: Declarar el arreglo con los litros de combustible en formato de cadena
const litrosDiarios = ["1.200 Lts", "2.500 Lts", "1.500 Lts", "2.544 Lts", "2.846 Lts", "3.521 Lts"];

// Paso 2: Limpiar y convertir las cadenas a números flotantes
const litrosNumericos = litrosDiarios.map(litro => 
  parseFloat(litro.replace(/[^\d.,]/g, '').replace(',', '.')) // Elimina "Lts" y convierte comas en puntos
);

// Paso 3: Usar el método reduce para calcular la suma total
const totalSemanal = litrosNumericos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

// Paso 4: Imprimir el total en formato con dos decimales
console.log(`Total de combustible ingresado durante la semana: ${totalSemanal.toFixed(2)} Lts`);
document.write(("<br>----------------------------------------</br>"));
document.write("$10.000 <br> $15.000 <br> $17.500 <br> $20.000 <br> $25.000");
document.write(("<br>----------------------------------------</br>"));
document.write("Total de combustible ingresado durante la semana: $", totalSemanal, ' Lts');
document.write(("<br>----------------------------------------</br>"));

