// ternário -> é basicamente um if. ele faz uma comparação, mas ele tem uma maneira especial de ser feito, de ser escrito
// faz uma comparação em uma única linha, então tem a comparação e as duas respostas: true ou false, deixando o código mais curto

const idadeMinima = 18;
const idadeCliente = 19;

//if (idadeCliente >= idadeMinima) {
//   console.log("cerveja")
//} else {
//    console.log("suco")
//}

            //condição                     //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

// boa prática: usar ternário quando fizer comparações que são mais curtas, que não tem tanta instrução para ser feita, se for para retornar só uma coisa ou outra, para encurtar o código

// operador ternário -> tem esse nome porque tem 3 operadores em uma única linha:
// operador de comparação, operador para separar as duas partes da comparação (código a ser executado e a comparação) e os dois pontos (:) que separam as 2 partes do resultado (true e false) 

