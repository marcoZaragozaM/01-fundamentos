//12. Operadores ternarios

// Se explicará con un ejemplo, una tienda abre de lunes a viernes a las 11 am, y fin de semana a las 9 am
// Allguien hace la consulta desde internet y dependiendo la hora le saldrá un mensaje de "Abiero"  o "cerrado"

const dia=1; //puede ser de 0 - domingo, 1-lunes ... 6-sábado
const horaActual=10;

let horaApertura;
let mensaje;

horaApertura = ([0,6].includes(dia))?9:11; //Se lee así, si los dias son 0 o 6, entonces se asigan 9 a horaApertura de lo contrario se asigna 11
mensaje=(horaActual>=horaApertura)?'Está Abierto':`Esta cerrado abrimos a las ${horaApertura}`;

console.log ({horaApertura, mensaje});