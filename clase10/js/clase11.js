console.log('===========================');
console.log('ejercicios de la clase 11');
console.log('===========================');

//operadores matematicos


console.log('Ejercicios de la clase 11');

let valoruno = 15;
let valordos = 25;

let resultado = valoruno = valordos;

console.console.log('el resultado de la multiplicacion es ${resultado}');

//js tiene el tipado dinamico
    resultado = valoruno + valordos;
    console.log('el resultado de la suma es: ${resultado}');

resultado = valoruno - valordos;
console.log('el resultado de la resta es: ' + resultado);

resultado = valoruno / valordos;
console.log('el resultado de la division es: ', resultado);

console.log(resultado); 


//incremento

let incremento = 0;
console.log(incremento);

incremento++; //me suma 1 a la variable numérica
incremento++;
incremento++;
console.log(incremento);


let megusta = 0;
megusta++;
megusta++;
megusta++;
megusta++;
megusta++;
console.log(megusta);


//decremeto
megusta--;
console.log(megusta);

//índice de un array:
              //  0         1       2         3
let alumnos = ['carla', 'juan', 'marco', 'sebastian']

console.log(alumnos[0]); // n - 1
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[3]);
console.log(alumnos[4]);


console.log(alumnos.length); //me devuelve la cantidad de elementos del arreglo

alumnos.push('clemente');

console.log(alumnos.length);
console.log(alummnos[4]);

console.log('==============================');

let frutilla = 'frutilla';
let banana = 'banana';

let frutas = ['frutillas' , 'bananas' , 'ciruelas'];
frutas.push('pomelo');

console.table(frutas);


console.log('=================================');

//condicionales
//opción de caminos a tomar
let edad = number(prompt('por favor introduce tu edad:'))
let autorizado = 15;

if ((edad >= autorizado) && () && ()){//mayor que 15 ->
    console.log('1.puedes entrar a la fiesta!!');
}

if (edad < autorizado) {// menor que
    console.log('2. no puedes entrar a la fiesta, eres menor');
}

if (edad == autorizado) {// si es igual a 
    console.log('3. no puedes entrar a la fiesta, eres menor');
}
if (edad === autorizado) {// igual estricto: tipo de  dato y de valor
    console.log('4. no puedes entrar a la fiesta, eres menor');
}
console.log('==================================');
