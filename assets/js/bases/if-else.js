//10. Condicional if - else, se usa para evaluar una condición y ejecutar una acción, si esta se cumple
//Ejemplo 1.
let a=5;
if (a>10){
    console.log('a es mayor al número ');
}
console.log ('Se evaluo la primer condición');
if (a<10){
    console.log('a es menor al número ');
}
console.log ('Se evaluo la segunda condición');

//= es asignación, == comparación, pero no importa el tipo de dato, === comparación, pero si importa el tipo de dato
const hoy=new Date(); //me da la fecha exacta
let dia=hoy.getDay(); //obtiene el número del  dia de la semana exacto, ejem domingo 0, lunes 1, .... sábado 6

console.log({dia});
if (dia===0){
    console.log('Domingo');
}else{
    console.log('No es domingo');
}

//Proceso para que me regrese un día de la semana más rápido - con objetos
dia=hoy.getDay();
const diasLetras={
    0:'domingo',
    1:'lunes ',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
}

console.log(diasLetras[dia] );

//Proceso para que me regrese un día de la semana más rápido - con arreglos
dia=3;
const diasLetras2=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.log(diasLetras2[dia] );