//let x = "";
//console.log(x); 
//x = "oi";

// Nesse caso, ele tentou exibir o valor da string x, mas é uma string vazia, ou seja,
// Eu reatribui "oi" na linha 3, na variável x, só que o JS executa uma linha depois da outra
// Ele reatribuiu só depois que exibiu (console.log(x))

// Função -> isola, permite que fechamos um bloco de código e podemos dizer exatamente quando
// queremos que esse pedaço de código seja executado

// DECLARAÇÃO DE FUNÇÃO

// O 1º momento da função é quando declaramos a função e diz o que ela faz:

// 1) declara a função (function)
                      //string
//function imprimeTexto(texto) {
    //console.log(texto)
//} // não acontece nada

// 2) executa a função (1 ou + vezes)

//imprimeTexto("oi");
//imprimeTexto("outro texto");
//imprimeTexto(soma()); //uma função dentro de outra função

// funções -> são esses trechos de código que separamos em declaração (function) e quando chamamos a função

// O JS tem 3 maneiras de escrever funções:

// 1. Declaração de Função

// função sem parâmetro
//function soma() {
    //return 2 + 2;
//}

//console.log(soma());

let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]

const exibeLista = (lista, descricao) => {
    e = ''
        for (let i = 0; i < lista.length; i++){
            e += '\n'+ descricao + lista [i]
        }
    return e
}

console.log(exibeLista(listaFuncionarios, 'Funcionário: '))
console.log(exibeLista(listaIdades, "Idades: "))

// 2. Expressão de Função
// 3. Arrow Function