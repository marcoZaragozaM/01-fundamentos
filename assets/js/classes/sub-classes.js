//Tema 4 - Subclases o Herencia

class Persona {

    static _conteo=0;
    static get conteo(){
        return Persona._conteo + ' instancias'; //asignar la clase por ejemplo a spiderman o ironman
    }
    
    static mensaje(){
        console.log('Hola a todos soy un método estático')
    }

    nombre='';
    codigo='';
    frase='';
    comida=''; 
    constructor(nombre='Sin nombre', codigo='sin codigo coco poncho', frase='la frase de coco poncho falta'){
        this.nombre=nombre;
        this.codigo=codigo;
        this.frase=frase;
        Persona._conteo++;
    }
    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log (`Soy ${this.nombre}, pero todos me conocen como ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log (`Mi frase es: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan='sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan='Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, y pertenezco a: ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu vecino amigable');
spiderman.setComidaFavorita='El pie de cereza';
console.log(spiderman.getComidaFavorita);
//const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();