// Verifique se a string é um palindromo //
function palindromo(word) {
    for (let index in word) {
      if (word[index] === word[word.length-1 - index]) {
        return true;
       } else {
         return false
      }
    }
  }
  console.log(palindromo('arara'))
  console.log(palindromo('desenvolvimento'))
  console.log(palindromo('amanda')) //Desmente meu código//
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.//
let comparador = 0;
function maiorValor(array) {
  for (let index in array){
    if(array[comparador] < array[index]) {
      comparador = index
    }
    }
    return comparador
    } console.log(maiorValor([2, 3, 6, 7, 10, 1]));
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.//
let comparador = 0;
function menorValor(array) {
  for (let index in array){
    if(array[comparador] > array[index]) {
      comparador = index
    }
    }
    return comparador
    } console.log(menorValor([2, 3, 6, 7, 10, 1]));
// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.//
let comparador = 0;
function maiorString(array) {
  for (let index in array){
    if(array[comparador] > array[index]) {
      comparador = array[index]
    }
    }
    return comparador
    } console.log(maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.//
let comparador = 0;
let contador = 0;
function repeteMais(array) {
  for (let index in array){
    if(array[comparador] === array[index]) {
      contador += 1;
      comprador = array[index];
    }
    }
    return comprador;
    } console.log(repeteMais([2, 3, 2, 5, 8, 2, 3]));
//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.//
let soma = 0;
function sum(n) {
  for(let i = 0; i <= n; i +=1) {
    soma = soma + i;
  }  return soma; 
} console.log(sum(5));
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .//
//----------> TESTE <--------- //
// let beginning = 'tests';
// let end = 'test';
function words(beginning, end) {
  for(let index in beginning) {
    for(let index2 in end){
    if(beginning[index.length] > end[index2.length]) {
      return true;
    } else {
      return false;
      }
    }
  }
}
console.log(words('test', 'est'));











