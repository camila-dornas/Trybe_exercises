// 1.Faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Utilizando reduce e filter:

const sumEvenNumbersReduceAndFilter = numbers.filter((number) => number % 2 === 0)
.reduce((acumulador, currentValue) => acumulador + currentValue);
console.log(`A soma de todos os pares do array numbers é igual a ${sumEvenNumbersReduceAndFilter}`);

//Utilizando apenas reduce:

const sumEvenNumbersReduce = numbers.reduce((acumulador, currentValue) => (currentValue % 2 === 0) ? acumulador + currentValue : acumulador);
console.log(`A soma de todos os pares do array numbers é igual a ${sumEvenNumbersReduce}`);