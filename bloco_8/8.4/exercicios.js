const assert = require('assert');
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((acumulador, currentValue) => acumulador.concat(currentValue));
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// ARRAY PARA A RESOLUÇÃO DAS QUESTÕES 2, 3, E 4 //
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
console.log("........................");

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft";

const reduceNames = () => books.map((book) => book.author.name).reduce((acc, curr) =>`${acc}, ${curr}`);

console.log(reduceNames());


assert.strictEqual(reduceNames(), expectedResult2);

console.log("........................");
// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult3 = 43;

const averageAge = () => books.map((book) => book.releaseYear - book.author.birthYear).reduce((acc, curr) => (acc + curr)) / books.length;
console.log(averageAge());

assert.strictEqual(averageAge(), expectedResult3);

console.log("........................");
// 4 - Encontre o livro com o maior nome.
const expectedResult4 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  }

const longestNamedBook = () => books.reduce((acc, curr) => (curr.name.length > acc.name.length) ? curr : acc);

console.log(longestNamedBook());

  assert.deepStrictEqual(longestNamedBook(), expectedResult4);
  console.log("........................");

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// function containsA() {
//     return names.reduce((acc, curr) =>
//        acc + curr.split('').reduce((acumulator, current) => {
//           if (current === 'a' || current === 'A') return acumulator + 1;
//           return acumulator;
//        }, 0), 0);
//   }

const containsA = () => names.reduce((acc, curr) => acc + curr.split(""), 0).reduce((acc2, curr2) => (curr2 === 'a' || curr2 === 'A') ? acc + 1 : acc2, 0);

console.log(containsA());

// assert.deepStrictEqual(containsA(), 20);