
//14. Estructura de ciclo while

const carros =['ford', 'mazda', 'honda', 'Toyota'];

let i=0;
/*while(i<carros.length){
    console.log(carros[i]);
    i++;
}*/

//también puede quedar de la siguiente manera
console.log ('==== ciclo while ====');
while(carros[i]){
    console.log(carros[i]);
    i++;
}

//14.1 Estructura de ciclo do - while
let j=0;
console.log ('==== ciclo do - while ====');
do{
    console.log(carros[j]);
    j++;
}while(j<carros.length);

//ejercio - imprime al revés los carros

let h=carros.length-1;
console.log ('==== imprimir al revés ====');
while (carros[h]){
    console.log(carros[h]);
    h--;
}
