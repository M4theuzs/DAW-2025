const value1 = true;
const value2 = false;

//Thruty/Falsy Variaveis vazias ou com o valor 0, se submeter 
//a um teste logico, ficam boolean.

if (value1) {
    console.log('Verdadeiro')
} else {
    console.log('False')
}
// saida verdadeiro

if (!value1) {
    console.log('Verdadeiro')
} else {
    console.log('False')
}
// saida falso

const value3 = '';
if (value3) {
    console.log('Verdadeiro')
} else {
    console.log('False')
}
//saida falso


//operador ternario 
(logica) ? (entao) : (senao)

const resultado = value3 ? 'Verdadeiro' : 'False';
console.log(resultado);
//saida falso
