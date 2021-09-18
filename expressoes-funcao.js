// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

// minhaFuncao("param")

// expressão de função

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1, 1))

// Nesse caso, criamos uma variável com const e atribuimos a função essa variável 
// É importante ser const para não acabarmos colocando um valor dentro dela e apagando a função dentro do código
// Acaba um modo mais curto de escrever a função, faz tudo em uma linha só 

// diferença principal entre declaração e expressão de função: HOISTING (levanta, traz todas as declarações para cima do nosso código, no topo)
// funções e var são "listadas" no topo do arquivo

console.log(apresentar()) 
//eu posso chamar a função na linha de cima onde ela está sendo declarada

function apresentar() {
    return "olá";
}

console.log(soma(1, 1)) // dá erro de referência (não consegue acessar 'soma' antes da inicialização)
const soma = function(num1, num2) { return num1 + num2 }
// quando fizemos a declaração de 'soma' com const, ela se comporta como uma variável e no JS não podemos usá-la a menos que já tenhamos iniciado, passado por ela alguma vez
