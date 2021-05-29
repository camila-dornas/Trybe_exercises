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
