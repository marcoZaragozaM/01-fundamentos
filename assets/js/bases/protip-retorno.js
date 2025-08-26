//Pro-tip de Retorno
 //1. Cuando se quiere retornar un objeto con dos propiedades y valores con el mismo nombre, no es necesario anotar ambos, solo 1
 function crearPersona(nombre, apellido){
    return{
        //nombre:nombre,
        //apellido:apellido
        nombre,
        apellido
    }
 }
 const persona=crearPersona('Manuel', 'Valdez');
 console.log(persona);

 //2. Retornar un objeto con función de flecha, colocar paréntesis entre el objeto
 const crearPersona2=(nombre, apellido)=>({nombre, apellido})
 
 const persona2=crearPersona2('Hilario', 'Echeverria');
 console.log(persona2);

 //3. Imprimir varios argumentos, con el método definido arguments en funciones tradicionales

 function argumentos(){
    console.log(arguments);
 }

 argumentos('Jose','Valencia',17,'masculino',true);

//4. Imprimir varios argumentos, con la función de flecha, se usa ...
const argumentos2=(...args)=>{
    console.log(args);
}
argumentos2('Maria','Juarez',16,'femenino',true);

//5. Obtener un argumento específico
const argumentos3=(...args)=>{
    return args;
}
const [nombre, apellido, edad, sexo, estudiante]= argumentos3('Maria','Juarez',16,'femenino',true);
console.log({nombre, estudiante});

//6. Destructuración de objetos
const tony = {
    nombre: 'Tony stark', //Dentro del objeto literak tenemos propiedad y valor de la propiedad
    codeName: 'IronMan',
    vivo: false,
    edad: 40,  //si no tengo la edad, puedo poner una por default en su atributo
    trajes: ['Mark I', 'Mark V', 'HulkBuster'], //puedo agregar arreglos
};

const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) =>{ //puedo mandar llamar todos los atributos del objeto con su nombre
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);