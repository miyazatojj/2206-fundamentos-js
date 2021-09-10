// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy
// são valores de variáveis que não são nem true e nem false
// mas para o JS equivalem a ser tipo verdadeiro ou falso
// não são booleanos mas podem se comportar como se fossem

// 0 => false
// 1 => true

// 0 é um dos valores que o JS interpreta como falsy
// outro tipo de dado que o JS considera como tipo falsy é a string vazia " "

// nesse exemplo,  == porque eu não quero comparar o valor e o tipo, eu quero comparar só o valor
console.log(0 == false); //true
console.log("" == false); //true
console.log(1 == true); //true

// Null e Undefined -> casos onde o JS faz equivalência com false
// null -> tipo de dado que representa vazio
// undefined -> é quando tem uma variável declarada mas não tem valor

let minhaVar; //undefined
let varNull = null; //null

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";
console.log(typeof numero); //number
console.log(typeof texto); //string

console.log(typeof minhaVar); //undefined
console.log(typeof varNull); //object -> quando o null foi criado no JS ele foi criado como objeto, ele deveria ser criado como null; esse é um dos bugs que acabam ocorrendo no JS
// não pretende-se consertar esses bugs porque senão vai acabar quebrando muitos códigos já existentes

