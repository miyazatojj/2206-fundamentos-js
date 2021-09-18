// == (comparação implícita)

const numero = 5;
const texto = "5";

// console.log(numero == texto); //true
// O JS fez a conversão do texto para um número e fez a comparação entre o número 5 e agora o texto que virou número

// console.log(numero === texto); //false
// Deu false porque o JS não faz essa conversão automaticamente para a gente. nesse caso, essa conversão é para fazer de forma manual

// === -> ele compara os valores das variáveis e os tipos das variáveis

//typeof
console.log(typeof numero); //number
console.log(typeof texto); //string

// == -> só compara valor
// === -> compara valor e tipo de dado

// boas práticas: pedem para usar === e quando fazer conversão fazer de modo explícito (usar string, number... esses métodos de conversão)