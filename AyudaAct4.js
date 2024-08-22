var nombre=['Martin','Facu','Santiago','Fer','nahuel']
document.write(nombre.join(' - ')+'<br>');
nombre.sort();
document.write(nombre.join(' - '));
console.log(nombre);

var numeros=[7,16,5,40,3,2,1,10]
document.write(numeros.join(' - ')+'<br>');
numeros.sort((a,b)=>a-b);
document.write(numeros.join(' - '));
console.log(numeros);