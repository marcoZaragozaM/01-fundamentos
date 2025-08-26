class Rectangulo{

    #area=0; //propiedades privadas

    constructor(base=0, altura=0){
        this.base=base;
        this.altura=altura;

        this.#area=base*altura;
    }

}

const rectangulo= new Rectangulo(18,15);
//rectangulo.#area=100;
console.log(rectangulo);