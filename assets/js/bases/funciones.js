// 8. Funciones

//1. función tradicional sin argumento
function tradicional(){
    console.log ('Función tradicional');
}
//2. función tradicional con argumento
function tradicionalArgumento(nombre){
    console.log ('Función tradicional '+nombre);
}
//3. función asignada a una variable o constante con argumento
const funcionConst=function(nombre){
    console.log ('Función asiganda a una constante '+nombre);
}
//4. función flecha con argumento
const funcionFlecha=(nombre)=>{
    console.log ('Función tipo flecha '+nombre);
}

//Mandar llamar cada una de las funciones
tradicional();
tradicionalArgumento('* Pase un argumento *');
funcionConst('* Pase un argumento *');
funcionFlecha('* Pase un argumento *');

//8.1 Return dentro de una función - Las funciones se crearon para retornar un valor y hacer más práctico el código si no, no tendría sentido su uso

//Ejemplo sencillo de función tradicional para sumar dos valores

function suma (a,b){
    return a+b;
}
console.log(suma(8,11));

//Mismo ejemplo pero usando función flecha
const sumar=(a,b)=>{
    return a+b;
}
console.log(sumar(12,14));

//Función de flecha con el mismo ejercicio de sumar dos valores
const sumar2=(a,b)=>a+b;
console.log(sumar2(20,40));

//Ejercicio : se da la siguiente función para obtener un número aleatorio, cambiala a flecha y llamala aleatorio 2
function aleatorio(){
    return Math.random();
}
console.log(aleatorio());

//Resultado
const aleatorio2=()=> Math.random();


console.log(aleatorio2());