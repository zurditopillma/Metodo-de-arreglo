var citrico = [];
var pepita = [];
for (i = 0; i < 5; i++) {
    let fruta = prompt("Ingrese el nombre de la fruta");
    let tipo = parseInt(prompt("Ingresar 1 si la fruta es de tipo citrica y  ingresar 2 si es del tipo pepita"))
    if (tipo == 1) {
        citrico.push(fruta);
    } else if (tipo == 2) {
        pepita.push(fruta);
    } else {
        alert("Intentelo de nuevo");
        i--;
    }
}
document.write("Frutas citricas: " + citrico.join(", ") + "");
document.write("Frutas pepitas: " + pepita.join(", ") + "");