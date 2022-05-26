
console.log('operador modulo: ');
//operador matematico del modulo x

//let numuno = Number(prompt('introduce un numero para saber si es par o impar: '))

let numUno= 100;

if (numUno % 2 == 0) {
    console.log(numUno);
    console.log('el numero ingresado es par');

}else{
    console.log('el numero ingresado no es par');
}

let resultado = numUno / 2;

console.log('el resultado de la division es: ', resultado);

//operadores logicos



//funciones

function miFuncion(){
    console.log('me llamaste para que haga algo');
}

//miFuncion();

let numDos= 100;
let numTres= 200;

function sumar(a, b){
    let respuesta = a + b;
    return a + b
}

console.log('el resultado de la suma es: ', sumar(numDos, numTres));

sumar(numDos, numTres);


//bucles 

let frutas = [
    "manzana",
    "pera",
    "mora",
    "limon",
    "kiwi",
    "frutilla",
    "naranja",
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);



console.log('======================================');



//for

for (let index = 0; index < frutas.length; index++) {
    console.log('Las frutas son: ', index, frutas[index]);
    
}