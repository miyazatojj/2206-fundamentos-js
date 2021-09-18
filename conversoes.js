// tipo de dado
// booleanos

// conversão implícita:
// permite converter um tipo de dado em outro
// "==" -> faz a conversão implícita antes de fazer a comparação
const numero = 456;
const numeroString = "456";

// console.log(numero === numeroString); //false
// console.log(numero == numeroString); //true
// O JS pegou o número 456, converteu em uma string e comparou os dois 
// essa conversão as vezes pode trazer alguns bugs para o código

//No JS:
// = -> para atribuir valor a uma variável
// == -> para fazer uma comparação pelo valor
// === -> para fazer uma comparação pelo valor e também o tipo, se é string, número... é mais específico... sempre compara os valores sem fazer a comparação antes

// console.log(numero + numeroString); // o JS pegou o número, transformou em string e virou uma concatenação

//conversão explícita
// Number()
// String()
// console.log(numero + Number(numeroString));

// se tentar converter uma string que não contenha só número, que tenha um algarismo, por exemplo, vai dar NaN
