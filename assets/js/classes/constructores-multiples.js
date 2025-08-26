class Persona{
    static porObjeto({nombre, apellido, pais}){ //al poner llaves, solo obtiene los datos recibidos del método porObjeto
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
    }

    getInfo(){
        console.log(`La Info es: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1='Coco',
      apellido1='Poncho',
      pais1='México';

const coquin={
    nombre:'Coco2',
    apellido:'ponchin',
    pais:'México'
}

const persona1=new Persona (nombre1, apellido1, pais1);
const persona2=Persona.porObjeto(coquin);
persona1.getInfo();
persona2.getInfo();