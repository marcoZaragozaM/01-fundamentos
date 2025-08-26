//Arreglo: Conjunto de elementos con las mimas características
//Auqnue en javaScript esto cambio y pueden combinarse diferentes tipos de elementos (tipos de datos)

//Declarar un arreglo

let nombres=['Jose', 'Pedro' , 'Maria', 'Alicia', 'Lucia']; //se asigna un nombre y ban entre corchetes los elementos
//para verlo simplemente llamamos la consola
//console.log (nombres);
//Entre llaves nos da más información, como su índice (posición)
//console.table ({nombres});

//Arreglo con diferentes tipos de elementos

let diferentesElementos=[
    'Mouse',
    'Javier',
    123,
    5+6,
    ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4']
];

//console.log (diferentesElementos);
//console.table ({diferentesElementos});

console.log (diferentesElementos[3]);
console.log (diferentesElementos[4]);

console.log (diferentesElementos[4][2]);

//Ejercicio, crear un arreglo de 5 elementos y el tercer elemento debe de ser otro arreglo con 4 elementos e imprime el segundo elemento
//del arreglo interno en pantalla