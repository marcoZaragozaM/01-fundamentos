//12.1 Protip Ternario
//Ejemplo1
const elMayor = (a,b)=>(a>b)?a:b;
console.log(elMayor(20,50));
//Ejemplo2
const tieneMembresia = (miembro)=>(miembro) ? '2 Dólares':'10 Dólares';
console.log(tieneMembresia(true));
//Ejmplo 3, operador ternario dento de arreglo
const amigo=true;
const amigArr=[
    'Jorge',
    'Mateo',
    'Alejandra',
    'Verónica',
    amigo ? 'Javier' : 'Maria'
];
console.table(amigArr);
//Ejemplo 4, operador ternario con 2 o más condiciones
const nota = 73;
const grado = nota>=95 ? 'A+' :
              nota>=90 ? 'A'  :
              nota>=85 ? 'B+' :
              nota>=80 ? 'B'  :
              nota>=75 ? 'C+' :
              nota>=70 ? 'C'  : 'F';

console.log({nota, grado});
