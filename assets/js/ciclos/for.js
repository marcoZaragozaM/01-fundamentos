//15. Estructura de ciclo For

const heroes = ['Superman', 'Spiderman', 'Batman', 'Aquaman'];

console.log ('*** For tradicional ***');
for (let i=0 ;i<heroes.length ;i++){
    console.log (heroes[i]);
}

console.log ('*** For in ***');
for (let i in heroes){  //si la posición iniciando en 0 está dentro del arreglo hérores lo imprime de uno en uno hasta que ya no haya elementos
    console.log (heroes[i]);
}

console.log ('*** For of ***'); // es igual al for in, solo cambia la sintaxis, regularmente no usamos i, sino el singular del arreglo 
// y no tengo que hacer referencia a la posición
for (let heroe of heroes){
    console.log (heroe);
}