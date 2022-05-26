console.log('Estamos en el archivo de la Calculadora');

let numeroUno = Number(prompt('ingresa un numero para realizar tu calculo: '));
let numeroDos = Number(prompt('ingresa otro numero para realizar tu calculo: '));


console.log('El primer número es: ', numeroUno);
console.log('El segundo número es: ', numeroDos);

function escribir(r) {
    console.log('El resultado es:', r);
}

function sumar(a, b) {
    let resultado = a + b;
    escribir(resultado)
}

function resta(a, b) {
    let resultado = a - b;
}

sumar(numeroUno, numeroDos);