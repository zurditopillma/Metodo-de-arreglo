// Paso 1: Crear un arreglo con números del 1 al 10
const numeros = [];
document.write(("1) Cargar un arreglo de números desde 1 a 10. Luego recorrer el arreglo mediante el método forEach, para luego obtener la tabla de multiplicar del número siete"));
for (let i = 1; i <= 10; i++) {
    numeros.push(i);
}
document.write("Tabla del 7:");
document.write(("<br>--------------</br>"));
// Paso 2: Usar el método forEach para imprimir la tabla de multiplicar del número 7
const numero = 7; // Número del cual queremos la tabla de multiplicar
numeros.forEach(n => {
    const resultado = numero * n;
    console.log(`${numero} x ${n} = ${resultado}`);
   
    document.write(`${numero} x ${n} = ${resultado}`);
    document.write(("<br>--------------</br>"));
});

