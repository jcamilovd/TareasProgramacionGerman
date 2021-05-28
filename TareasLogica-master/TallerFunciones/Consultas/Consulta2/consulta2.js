function predeterminado1(a,b=2) {
    return a+b;
}
function predeterminado2(a=1,b) {
    return a+b;
}
function predeterminado3(value,array=[]) {
    array.push(value);
    return array;
}
console.log(predeterminado1(2));
console.log(predeterminado2(undefined,3));
var n=predeterminado3(2);
console.log(n[0]);