/**
 *Cree un programa que lea los tres ángulos internos de un triángulo 
 y muestre si los ángulos corresponden 
 a un triángulo o no. Realice una versión con condicionales 
 y otra con estructura switch-case.
 */

let angulo1=parseInt(prompt("Ingrese el aunglo A"));
let angulo2=parseInt(prompt("Ingrese el angulo B"));
let angulo3=parseInt(prompt("Ingrese el angulo C"));



  if(angulo1+angulo2+angulo3==180){ //se puede declarar una varia con la suma de los angulos

      console.log("Los angulos corresponden aun triangulo");
  }else{
      console.log("Los angulos no corresponden aun triangulo");
  }

  switch (angulo1+angulo2+angulo3) { 
      case 180:
        console.log("Los angulos corresponden aun triangulo");
             break;
  
      default:
        console.log("Los angulos no corresponden aun triangulo");
        break;
  }
