//tema 6.2 Propiedades de los arreglos

//longitud de un arreglo - lenght
let juegos = ['Mario kart', 'Zelda', 'Mortal Kombat', 'Grow a garden', 'Street fighter'];
console.log ('El arreglo tiene :', juegos.length, 'elementos');

//primer elemento
let primero = juegos[0];
console.log ({primero});
//último elemento
let ultimo = juegos[juegos.length-1];
console.log ({ultimo});

//Posición de cualquiera de los elementos por nombre
let posicionJuego=juegos.indexOf('Mortal Kombat');
console.log(posicionJuego,juegos[posicionJuego]);

//Iterar por todo el arreglo, es decir mostrará cada elemento del arreglo hasta terminar
/*juegos.forEach ((elemento, indice)=>{
    console.log({elemento,indice});
});*/

//Agregar elemto al final
let agregarInicio = juegos.push ('F-Zero');
//Agregar elemento al inicio
let agregarFinal = juegos.unshift ('Fire embled');

//Itero de nuevo
juegos.forEach ((elemento, indice)=>{
    console.log({elemento,indice});
});

//Borrar a partir de una posición, 1 o más elementos
let pos=1;
let juegosBorrados = juegos.splice(pos,2); //borrara a partir de la posición 1, dos elementos
console.log('Los juegos borrados son :', {juegosBorrados},  'los juegos que quedan son :' ,{juegos});

