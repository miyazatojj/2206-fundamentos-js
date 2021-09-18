// arrow function -> 3º tipo de se escrever funções
// recebe o nome arrow (seta) porque essa função utiliza uma (flecha =>) na sintaxe dela

function apresentar(nome) {
    return 'Meu nome é ${nome}';
}

// Arrow function
const apresentarArrow = nome => 'Meu nome é ${nome}';
const soma = (num1, num2) => num1 + num2;

// arrow function:
// deixa o código menor
// dá para declarar tudo em uma linha só
// não precisa de chaves, de return
// não pode ser nomeada
// sempre vem com const e o nome da variável que vamos utilizar antes
// cuidado para não confundir com o operador maior ou igual a que (>=)
// se tiver mais de uma linha, então será preciso usar chaves e return

// Arrow function com + de 1 linha de instrução:
const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10) { // || -> ou
        return "Somente número de 1 a 9"
    } else{
        return num1 + num2;
    }
}

// 3 Formas de Escrever Função:
// 1. Declaração de Função
// 2. Expressão de Função
// 3. Arrow Function:
// - jeito rápido e curto de escrever a função
// - o código fica mais curto, isso é uma coisa boa
// - porém, se você achar que ela não é muito fácil de entender o que está acontecendo dentro dela, você pode usar declaração de função para fazer isso
// - tem vantagens quando mexemos com objetos 

// De modo geral podemos usar as 3 funções, só lembrando da questão do Hoisting quando fazemos a declaração da função completa
// Arrow function se comporta nessa questão de Hoisting exatamente da mesma forma que a Expressão de Função