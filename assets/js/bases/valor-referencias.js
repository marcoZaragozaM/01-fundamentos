//9. Datos por valor y referencia
//Todos los datos primitivos son por valor (string, number, undefined, null, boolean, symbol)
//A todos los datos que no son variables primitivas se les considera un objeto

//1. Variables por valor, ejemplo1
let a=10;
let b=a;
console.log({a,b}); // en este caso a y b tienen el mismo valor 10
//Asignamos otro valor a "a"
a=30;
console.log({a,b}); // en este caso a ya vale 30 y b tienen el mismo valor 10

//2. Todos los demas datos en javaScript son por referencia, Ejemplo 2
//Creamos un objeto
let luis={
    nombre:'luis'
}
console.log({luis});
//creamos otra variable "ana" y le asignamos luis
let ana=luis;
console.log({luis,ana}); //ambos imprimen nombre:luis
// cambiamos el valor de la propiedad nombre de "ana" por ana
ana.nombre='ana';
console.log({luis,ana}); //ambos imprimen nombre:ana, pero yo solo se lo cambie a Ana

//para corregir esto hacemos lo siguiente, crearé otro ejemplo
let nacho={
    nombre:'nacho'
}
let lety={...nacho};//con la sintaxis {...'valor'}, hacemos la copia del objeto y lo dejamos independiente
lety.nombre='lety';
console.log({nacho,lety}); //por lo tanto nacho imprime nombre:nacho y lety nombre:lety

//3. Como aplica esto para una funcion
const cambiarNombre=(persona)=>{
    //persona.nombre='persona1'; //si dejo persona 1, en este punto ambos arrojan persona1
    //persona.nombre='persona2'; //pero si cambio a persona2 en este punto ambos arrojan persona2
    persona.nombre='persona2'; //repetí la linea para hacer la prueba y ambos arroje lineas diferentes
    return persona;
}
let persona1={nombre:'persona1'}
let persona2=cambiarNombre({...persona1});
//para dejar a cada persona como persona diferente, se cambia la asignación de la siguiente manera
console.log({persona1, persona2});

//4. Como aplica esto para un arreglo

const frutas=['manzana', 'pera', 'guayaba', 'mandarina'];
const otrasFrutas=[...frutas]; //en este punto ambas tienen las misma frutas, pero como ya utilice la nueva sintaxis puedo manejera otrasFrutas como independiente
frutas.unshift('sandia');//agregago una fruta al inicio al arreglo frutas
otrasFrutas.push('mango'); //agrego una fruta al final al arreglo otrasFrutas
console.table({frutas});
console.table({otrasFrutas});