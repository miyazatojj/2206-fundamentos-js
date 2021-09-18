// var -> não é muito recomendada usar hoje em dia por ela ser muito solta e muito propensa a bugs

/* var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area); //35
var area; */ //var declarada sem valor nenhum

//Quando o JS começa a ser executado, ele vai ler todo o seu programa, vai achar todas as variáveis que são do tipo var e vai carregá-las primeiro,
//então, podemos começar a usá-las antes de declarar, essa é uma das vantagens da var
//Porém, isso pode acarretar algumas complicações, porque podemos por exemplo acabar utilizando o mesmo nome de variável em duas partes e acabarmos não nos atentando a isso
//Para resolver isso, podemos usar a let


// let -> permite trocar os valores dela, mas é preciso sempre declarar o valor dela antes de ser utilizada

/* let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2; //triângulo
}

console.log(area); //35 */

// não usamos o var e deixarmos como estava antes porque dentro do nosso programa temos vários blocos de código e esses blocos são definidos pelas chaves, como por exemplo é o caso do if
// e não é interessante termos uma variável que consigamos mexer no valor dela dentro dos blocos, já que o var é muito solto dentro do nosso programa e podemos acabar reutilizando 
// dessa variável em outros locais, dentro de outros blocos de código, então por segurança é melhor manter como let

// bloco de código -> é sempre definido no JS por chaves {}, então o que está dentro de chaves é um bloco

// dentro do bloco, estamos atribuindo o valor (altura * comprimento) à variável let área que está fora

// *variável -> espaço na memória onde guardamos um dado

// const -> não pode mudar o valor dela, o valor é fixo, uma vez declarada fica preso à ela e tem que declarar o valor antes
// sempre ao criar uma nova constante, já tem que ter um valor atriuído (ao contrário da let e var)

// exemplo de quando tem que usar let e não const:
const forma = "triângulo";
const altura = 5;
const comprimento = 7;
let area; // não pode ser const area porque precisa ter um valor (falta um inicializador na declaração da const)

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area); //17.5

// hoje em dia, a gente usa let (quando sabemos quando o valor da variável vai precisar mudar, ser reatribuído) e para todos os outros casos, pode usar const sempre