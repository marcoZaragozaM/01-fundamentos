//Tema 1 - Clases - Inicializar una clase

class Persona {
    //primero las Tema 4. propiedades y métodos estáticos
    //Podemos utilizar las propiedades o métodos estáticos directamente con la clase

    static _conteo=0;
    static get conteo(){
        return Persona._conteo + ' instancias'; //asignar la clase por ejemplo a spiderman o ironman
    }
    
    static mensaje(){
        console.log('Hola a todos soy un método estático')
    }

    //Después las propiedades no estáticas
    nombre='';
    codigo='';
    frase='';
    comida=''; //agrego esta propiedad para el get y set
    //creo el constructor que se encargara de dar valor a los atributos
    constructor(nombre='Sin nombre', codigo='sin codigo coco poncho', frase='la frase de coco poncho falta'){
        this.nombre=nombre;
        this.codigo=codigo;
        this.frase=frase;
        Persona._conteo++;
    }

    //tema 3. Set y get, Set para aderir un nuevo valor, get para obtenerlo
    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
        console.log(`Establezco que la comida favorita es: ${this.comida}`);
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }


    //tema 2. Crear métodos, "Debajo del constructor"
    quienSoy(){
        console.log (`Soy ${this.nombre}, pero todos me conocen como ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log (`Mi frase es: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu vecino amigable');
const ironman = new Persona('Tony Stark', 'Iroman', 'Soy el hombre de acero bitches');
//console.log(ironman);
//ironman.quienSoy();
//ironman.miFrase();
//spiderman.quienSoy();
//spiderman.miFrase();
spiderman.setComidaFavorita='El pie de cereza';

console.log(spiderman.getComidaFavorita);
//console.log(spiderman);
console.log(Persona.conteo); //Aquí estoy mandando llamar un get estático de Persona
Persona.mensaje(); //Aquí estoy mandando llamar un método estático de persona

