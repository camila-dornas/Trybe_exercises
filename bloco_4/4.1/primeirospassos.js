let a = 2
let b = 10

console.log('Adição: ' + (a+b));

console.log('Subitração: ' + (a-b));

console.log('Multiplicação: ' + a*b);

console.log('Divisão: ' + a/b);

console.log('Módulo: '  + a%b);
//Faça um programa que retorne o maior de dois números. //

let a = 1
let b = 8

if (a<b) {
    console.log(b)
}
else if (a>b) {
    console.log(a)
}
else {
    console.log('São iguais')
};
//Faça um programa que retorne o maior de três números.//
let a = 10
let b = 10
let c = 10

if (a>b && a>c) {
    console.log(a);
}
else if (b>a && b>c) {
    console.log(b);
}
else if (c>a && c>b) {
    console.log(c);
}
else {
    console.log('São iguais')
};
// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.//
let number = 0;
if (number>0) {
    console.log('positive');
} else if (number<0) {
    console.log('negative');
} else {
    console.log('zero');
}
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//
let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 45;
if(angulo1+ angulo2 + angulo3 === 180){
    console.log(true);
} else {
    console.log(false)
};
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.//
let peça =  'Queen';
switch (peça.toLowerCase()) {
    case 'king':
        console.log('O rei se movo uma casa por vez, para todas as direções');
        break;

    case 'queen':
        console.log('A rainha move-se para a horizontal/vertical, andando quantas casa quiser, desde que não pule nenhuma peça');
        break;

    case ' bishop':
        console.log('O bispo move-se para as diagonais, andando quantas casa quiser, desde que não pule nenhuma peça');
        break;

    case 'horse':
        console.log('Movimenta-se em forma de L, podendo pular outras peças');
        break;

    case 'tower':
        console.log('A torre move-se paras as verticais/horizontais, andando quantas quiser, desde que não pule outras peças');
        break;
        
    case 'pawn':
        console.log('o peão move-se de casa em casa e apenas para a frente. E captura uma peça pelas diagonais');
        break;
    default:
        console.log('Peça inválida');   
}
//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras://
let porcentagem;
if (porcentagem < 0 || porcentagem > 100) {
    console.log('nota inválida!');
} else if (porcentagem >= 90) {
    console.log('A');
} else if (porcentagem >= 80) {
    console.log('B');
} else if (porcentagem >= 70) {
    console.log('C');
} else if (porcentagem >= 60) {
    console.log('D');
} else if (porcentagem >= 50) {
    console.log('E');
} else {
    console.log ('F');
}
//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .//
let array = [2, 3, 5];
for(index = 0; index < array.length; index += 1) {
   if(array[index] % 2 === 0){
       console.log(true);
   } else {
       console.log(false);
   }
   return console.log();
};
//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .//
let array = [1, 3, 5];
for(index = 0; index < array.length; index += 1) {
   if(array[index] % 2 !== 0){
       console.log(true);
   } else {
       console.log(false);
   }
   return console.log();
};
//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.//
let valorReal = 2;
let impostoProduto = (valorReal * 20) / 100;
let custoProduto = valorReal + impostoProduto;
let valorVenda = 4;
let lucro = valorVenda - custoProduto;
console.log(lucro*1000);
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.//
let salarioBruto = 1500.90
let INSS;
let ImpostoRenda;
if(salarioBruto <= 1556.94){
    INSS = 8;
        console.log(salarioLiquido)
}