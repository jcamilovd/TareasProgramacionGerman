/**
 * Cree un programa que lea un número y muestre si este es par o impar. 
 * Realice una versión con condicionales y otra con estructura switch-case.
 */

let numero=parseInt(prompt("Ingrese un numero"));
  
  if(numero%2==0){
      console.log("El numero es par",numero);
  }else{
      console.log("El numero es impar",numero);
  }

  switch (numero%2) {  
      case 0:
        console.log("El numero es par",numero);
        break;
  
      default:
        console.log("El numero es impar",numero);
         break;
  }
