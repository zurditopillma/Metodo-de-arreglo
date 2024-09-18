// Arreglo original de nombres
const nombres = ['Juan', 'Ana', 'Pedro', 'María'];

// Nuevo arreglo para almacenar los nombres con el prefijo
const nombresConPrefijo = [];

// Usando forEach para agregar el prefijo
nombres.forEach(nombre => {
    nombresConPrefijo.push('Gerente. ' + nombre);
});

// Mostrar el resultado
console.log(nombresConPrefijo);
document.write(("3) Anexar el prefijo Gerente. a un arreglo con cuatro nombres de personas"));
document.write(("<br>----------------------------------------</br>"));
document.write(nombresConPrefijo);
document.write(("<br>----------------------------------------</br>"));
