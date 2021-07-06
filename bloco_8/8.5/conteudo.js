// ----> SPREAD OPERATOR <---- //
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'pêra', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'suco de lanranja', 'limão'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]

console.log(fruitSalad(specialFruit, additionalItens));

// ---> Array Destructuring <--- //
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [index0] = saudacoes;

console.log(index0);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

//3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,,...numerosPares] = numerosPares;
// Porque colocando apenas as vírgulas já entendeu que queria apenas o números pares?

console.log(numerosPares);

// ---> Default Destructuring <--- //
// 1.Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// const { nationality = "Brazilian" } = person; ----------> Se só funciona com a alteração diretamente na função getNationality, porque precisa dessa declaração?

console.log(getNationality(otherPerson));
console.log(getNationality(person));

// ---> Object Property Shorthand <--- //
// 1. Altere a função getPosition utilizando a property shorthand .
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude });
  
  console.log(getPosition(-19.8157, -43.9542));

// ---> Default Parameters <--- //
// 1. Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;
  
  console.log(multiply(8));
