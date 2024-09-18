// Solicitar al usuario que ingrese un número para la tabla de multiplicar
const numero = parseInt(prompt("Ingrese el número para obtener su tabla de multiplicar:"), 10);
document.write(("2) Modifique el ejercicio anterior para que podamos obtener la tabla de multiplicar de cualquier valor ingresado. Utilice un título de nivel tres para imprimir: “Tabla del N°: x”</br>"));
document.write("</br>Tabla del N°: ", numero);
document.write(("<br>----------------------------------------</br>"));
// Verificar que la entrada es un número válido
if (!isNaN(numero)) {
    // Crear un arreglo de números del 1 al 10
    const numerosos = Array.from({ length: 10 }, (_, i) => i + 1);

    // Imprimir el título
    console.log(`\nTabla del N°: ${numero}`);


    // Usar el método forEach para recorrer el arreglo y imprimir la tabla de multiplicar
    numerosos.forEach(num => {
        console.log(`${numero} x ${num} = ${numero * num}`);
        document.write(`${numero} x ${num} = ${numero * num}`);
        document.write(("<br>----------------------------------------</br>"));
    });
} else {
    // Manejar el caso en que el usuario no ingresa un número válido
    console.log("Por favor, ingrese un número válido.");
}