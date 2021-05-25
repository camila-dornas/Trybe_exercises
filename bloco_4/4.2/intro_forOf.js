// Permite verificar cada elemento do array (numeros ou letras)
let numbers = [1,2,3,4,5];

for(let number of numbers) {
    console.log(number);
}

let word = "hello"

for(let letter of word) {
    console.log(letter)
}
// Permite somar algo nos elementos do array, sem alterar o array
let numerais = [10, 20, 30];

for(let sum of numerais) {
    sum +=10;
    console.log(sum)
}

let letras = "Alou"

for(let sum of letras) {
    sum +=" X";
    console.log(sum);
}