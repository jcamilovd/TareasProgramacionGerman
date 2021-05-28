/**
 *Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. 
 *Realice una versión con condicionales y otra con estructura switch-case.
 */

let numero=parseInt(prompt("Ingrese un numero "));

  if(numero%5==0){
      console.log("El numero es divisible entre 5",numero);
  }else{
      console.log("El numero no es divisible entre 5",numero);
  }

  switch (numero%5) {
      case 0:
        console.log("El numero es divisible entre 5",numero);
        break;
  
      default:
        console.log("El numero no es divisible entre 5",numero);
        break;
  }
