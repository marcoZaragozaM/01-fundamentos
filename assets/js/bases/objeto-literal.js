//Tema 7. Objetos literales
let personaje = {
    nombre: 'Tony stark', //Dentro del objeto literak tenemos propiedad y valor de la propiedad
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: { // puedo agregar otros objetos
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'], //puedo agregar arreglos
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    //3: 'alabado' // para asignar un valor a una propiedad número
};

//Mando llamar todo mi objeto literal
console.log(personaje);

//llamo solo una propiedad, en este caso codeName
console.log(personaje.codeName); 
//console.log(personaje[3]); cuando tienes un número como atributo, se pone entre corchetes
//Esta es otra manera de llamar propiedades
console.log(personaje['codeName']);
//Un ejemplo más de llamar una propiedad de un objeto dentro del objeto principal
console.log('latitud',personaje.coords.lat);
console.log('Número de trajes que tiene', personaje.codeName, personaje.trajes.length, 'trajes'); // este es un ejercicio
console.log('último traje :', personaje.trajes[personaje.trajes.length-1]); // ejercicio
//Otra manera de llamar propiedades definiendo previamente en este caso una constante
const x = 'vivo';
console.log('Vivo', personaje[x]);

//Tema 7.1 Detalles extras - Objetos Literales

//borar una propiedad - delete
delete personaje.edad;
console.log (personaje);

//Convertir cada propiedad del objeto en arreglo
const entriesPares= Object.entries(personaje);
console.log(entriesPares);

//agregar un elemento
personaje.casado=true;
console.log(personaje);

//bloquear objeto para no modificarlo
Object.freeze(personaje);
personaje.dinero=10000000000;
delete personaje.casado;
console.log(personaje);

//Obtener propiedades y valores por separado del objeto
const propiedades=Object.getOwnPropertyNames(personaje);
const valores=Object.values(personaje);
console.log({propiedades,valores});
