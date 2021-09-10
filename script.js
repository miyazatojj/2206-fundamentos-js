// var
// var não é muito recomendada usar hoje em dia por ela ser muito solta e muito propensa a bugs

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area);
// var area;


// let -> permite trocar os valores dela, mas é preciso sempre declarar o valor dela antes de ser utilizada

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;

//if (forma === 'retângulo') {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

// const -> não pode mudar o valor dela, o valor é fixo, uma vez declarada fica preso à ela e tem que declarar o valor antes
// sempre ao criar uma nova constante, já tem que ter um valor
// exemplo de quando tem que usar let e não const:
const forma = "triângulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);

// hoje em dia, a gente usa let (quando sabemos quando o valor da variável vai precisar mudar, ser reatribuído) e para todos os outros casos, pode usar const sempre