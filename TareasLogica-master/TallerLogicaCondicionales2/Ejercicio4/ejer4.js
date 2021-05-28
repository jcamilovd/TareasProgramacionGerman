/**
 * Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no.
 *  Realice una versión con condicionales y
 *  otra con estructura switch-case.
 */

let number=parseInt(prompt("Ingrese un numero"));
if(number>0&&number<=15){
  if(number==2||number==3||number==5||number==7||number==11||number==13){
      console.log("Es primo el numero",number);
  }else{
      console.log("No es primero el numero",number);
  }

  switch (number) {
      case 2:
      case 3:
      case 5:
      case 7:
      case 11:
      case 13:
        console.log("Es primo el numero",number);
          break;
  
      default:
        console.log("No es primero el numero",number);
          break;
  }
}