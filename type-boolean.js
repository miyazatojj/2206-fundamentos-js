// comparações sempre retornam True ou False
// === -> usado para comparar
// exemplo: para comparar se a senha inserida é a mesma que está guardada no banco de dados
// exemplo: se o cadastro está ativado, então é True
// booleanos podem assumir valores de variáveis

const primeiroNumero = 5;
const segundoNumero = 5;

// console.log(primeiroNumero === segundoNumero);

let cadastroAtivado = true;

// comparando strings
const texto1 = "Alura";
const texto2 = "alura";
//console.log(texto1 === texto2);

const nome = "Lara";
const sobrenome = "Ayumi";
const nomeCompleto = nome + sobrenome;
// console.log(nomeCompleto);

const idade = 2;
const dezAnosDepois = "12";
const resultado = idade + dezAnosDepois
// console.log(resultado);

const bacharel = false;
// console.log(bacharel == 0);

const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;

console.log(operacao);