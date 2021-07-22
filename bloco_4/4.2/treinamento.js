//percorra o array imprimindo todos os valores nele contidos com a função console.log(); //
let numbers = [5,9,3,19,70,8,100,35,27];
let conta = 0

for(let number of numbers) {
    console.log(number)
}
//some todos os valores contidos no array e imprima o resultado;
for(let index = 0; index<numbers.length; index += 1) {
    conta += numbers[index]
}
console.log(conta)
//calcule e imprima a média aritmética dos valores contidos no array;
for(let index = 0; index < numbers.length; index += 1) {
    conta += numbers[index]
}
console.log(conta / numbers.length);
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5,9,3,19,70,8,100,35,27];
let conta = 0
for(let index = 0; index < numbers.length; index += 1) {
    conta += numbers[index]
    resultado = conta / numbers.length;
}
if(resultado > 20){
console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20')
};
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;//
let numbers = [5,9,3,19,70,8,100,35,27];
let comparador = numbers[0];
for(let index = 0; index < numbers.length; index += 1) {
   if(comparador < numbers[index]){
       comparador = numbers[index]
   } 
}
console.log(comparador);
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";//
let numbers = [5,9,3,19,70,8,100,35,27];
let contador = 0
for(let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) {
        contador += 1;
    } else {
       console.log('Nenhum valor ímpar encontrado');
    }
}
console.log(contador)
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;//
let numbers = [5,9,3,19,70,8,100,35,27];
let comparador = numbers[0];
for(let index = 0; index < numbers.length; index += 1) {
   if(comparador > numbers[index]){
       comparador = numbers[index]
   } 
}
console.log(comparador);
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;//
let array = [];
for(let index = 0; index <= 25; index += 1) {
     array.push(index);
}
console.log(array);
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .//
let array = [];
for(let index = 0; index <= 25; index += 1) {
     array.push(index);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
for(let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
}
