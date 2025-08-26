//Singleton - Es una instancia única de mi clase

class Singleton{

    static instancia; //al principio es undefined
    nombre='';

    constructor (nombre=''){
        if (!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia=this;
        this.nombre=nombre;
    }
}

const instancia1= new Singleton('Coco Poncho');
const instancia2= new Singleton('Coco Ponchin');
const instancia3= new Singleton('Coquin Poncho');
console.log(instancia1.nombre);
console.log(instancia2.nombre);
console.log(instancia3.nombre);