//11. Lógica booleana

const regresaTrue=()=>{
    console.log ('Regresa True');
    return true;
}

const regresaFalse=()=>{
    console.log ('Regresa False');
    return false;
}

/*console.log('Not o la  negación');
console.log(true); //true
console.log(!true);//esto y false es lo mismo
console.log(false);

console.log ('And'); // true si todo los valores son verdaderos
console.log(true && true);//true
console.log(true && false);//false

console.log('==================');
console.log (regresaFalse() && regresaTrue());

console.log('==================');
console.log (regresaFalse() && regresaFalse());

console.log('==================');
console.log (regresaTrue() && regresaFalse());*/

/*console.log ('OR'); //condición "O" -> siempre regresa false si algo son falsas;
console.log (regresaTrue() || regresaFalse());
console.log (regresaFalse() || regresaTrue());
console.log (regresaTrue() || regresaTrue());
console.log (regresaFalse() || regresaFalse());*/

//11.1 Asignaciones con lógica booleana

console.log('====Asignaciones====');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola pepa'&&150;//a1 al ser true toma el último valor, en este caso 150
console.log ({a1})

const a2 = 'hola' && 'pepa';//
console.log ({a2})

const a3 = soyFalso || 'ya no soy falso';//
console.log ({a3})

const a4 = soyFalso || soyUndefined || soyNull || 'Encontró valor' || true;//En el OR, se asigna el primer valor encontrado
console.log ({a4})