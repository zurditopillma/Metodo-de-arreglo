const edades = [25, 30, 18, 40, 22]; // Ejemplo de arreglo con edades
document.write(("<br>4) En un arreglo se ha almacenado las edades de un grupo de personas. Utiliza el método forEach para averiguar cuántos años tenían cada una de ellas seis años atrás. </br>"));
document.write(("<br>25años, 30años, 18años, 40años, 22años</br>"));
edades.forEach(edad => {
    if (edad >= 6) {
        const edadHaceSeisAños = edad - 6;
        console.log("Hace seis años, tenía ${edadHaceSeisAños} años.");
        document.write(("<br>----------------------------------------</br>"));
        document.write(`Hace seis años, tenía ${edadHaceSeisAños} años.`);
        
    } else {
        console.log(`Hace seis años, no tenía edad suficiente para contar.`);
        document.write(`Hace seis años, no tenía edad suficiente para contar.`);
        document.write(("<br>----------------------------------------</br>"));
    }
});

