//1- Cargar un arreglo con diez estaturas de personas.
      //a. Agregar una estatura en la última posición.
      //b. Mostrar el arreglo, con el nuevo valor asignado.

      var arreglo = ["mucho ","1,60" ,"1,70" ,"1,50" ,"1,73" ,"1,65" ,"1,90" ,"2,03" ,"1,55" ,"2,0" ];
      document.write(arreglo.join("<br>"))
      arreglo.push("2,1 ");

      //2- Cargar un arreglo que permita cargar a cinco jugadores de la selección.
      //a. Agregar un jugador en la primera posición.
      //b. Mostrar el arreglo, con el nuevo valor asignado.
document.write(("<br>-------------------------------<br>"));
      var arreglojugadores = ["Messi ", "Di maria ", "De paul ", "Paredes ", "Dibu "];
      arreglojugadores.unshift(" Julian Alvarez ");
      arreglojugadores.pop();
      arreglojugadores.pop();
      arreglojugadores.pop();
      document.write(arreglojugadores.join("<br>"));
      arreglojugadores.pop(" ");
      document.write(("<br>-------------------------------<br>"));
      var arreglojugadores = ["Messi ", "Di maria ", "De paul ", "Paredes ", "Dibu "];
      arreglojugadores.unshift(" Julian Alvarez ");

      var arregloedades=[]
var personas=parseInt(prompt("cantidad de personas "));
      for(let i=n;i<personas;i++){
        arreglo[i]=prompt("ingrese su edad ");
      }
      arreglo.shift();
      arreglo.shift();
      arreglo.shift();
      arreglo.shift();
      arreglo.shift();

      document.write(arregloedades.join("<br>"));