//Trabalhando com constantes e variaveis//
//Constantes não podem ser alteradas//
const nome = 'Camila';
const birthyCity = 'Santos';
let birthYear = 1996;
console.log(nome);
 console.log(birthyCity);
 console.log(birthYear);
 //Variáveis podem ser alteradas//
 birthYear = 2030;
 console.log(nome);
 console.log(birthyCity);
 console.log(birthYear);
 //  birthyCity = 'BH'; ---> OCORRERÁ UM ERRO
 // Trabalhando com tipagem dinâmica//
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
patientId = '50'
const patientEmaill ='ana@email.com';
// Imprimir qual o tipo da variável//
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmaill);
console.log(typeof patientAge);
// Trabalhando com operadores aritméticos básicos//
let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = (base*2) +(altura*2);
console.log(area);
console.log(perimetro);
// Trabalhando com if/else
let nota = 90;
if(nota >= 80){
    console.log('Congratulations, you pass! :D');
} else if (nota < 80 && nota >= 60) {
    console.log('You are on our waiting list! :o');
} else {
    console.log('You was disapproved :(');
}
// Trabalhando com switch e Case //
let status;

switch (status) {
    case 'Approved':
        console.log('Congratulations, you pass! :D')
        break;

    case 'List':
        console.log('You are on our waiting list! :o')
        break;
    
    case 'Disapproved':
        console.log('You was disapproved :(')
        break;

    default:
        console.log('Não se aplica')
}