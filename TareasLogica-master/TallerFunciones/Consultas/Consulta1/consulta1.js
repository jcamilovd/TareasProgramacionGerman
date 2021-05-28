
console.log(Opcional1());
console.log(Opcional2(undefined,2));

function Opcional1(numero) {
    if(numero==undefined)
    {
        return 0;
    }
    return numero;
}

function Opcional2(numero,numero1) {
    if(numero!=undefined){
        return numero1+numero;
    }else{
        return numero1;
    }
    
}

