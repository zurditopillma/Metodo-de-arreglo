let nombre=[]
for (i = 0; i < 10; i++) {
    let nom = prompt("Ingrese 10 nombres");
    nombre.push(nom);
}
document.write(nombre.join(' - ')+'<br>');
nombre.sort();
document.write(nombre.join(' - ')+'<br>');
console.log(nombre);

document.write(("<br>--------------------------------------------------------------------------------------------------<br>"));

let numeros=[]
for (i = 0; i < 15; i++) {
    let num = prompt("Ingrese 15 numeros");
    numeros.push(num);
}
document.write(numeros.join(' - ')+'<br>');
numeros.sort((a,b)=>a-b);
document.write(numeros.join(' - ')+'<br>');
console.log(numeros);

document.write(("<br>-------------------------------<br>"));

let numerosAlateorios=[]
for (i = 0; i < 10; i++) {
    let alateorios = prompt("Ingrese 10 numeros alateorios");
    numerosAlateorios.push(alateorios);
}
document.write(numerosAlateorios.join(' - ')+'<br>');
numerosAlateorios.sort((a,b)=>a-b);
document.write(numerosAlateorios.join(' - ')+'<br>');
console.log(numerosAlateorios);