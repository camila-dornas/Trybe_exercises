// forEach //
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

emailListInData.forEach(showEmailList); // iprime a frase do console a cima, acrescentando os e-mails.
console.log(emailListInData); //o array com os emails

// find //
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
const isDivisible = numbers.find(findDivisibleBy3And5);console.log(isDivisible); // retorna o 1º nº do array que é divisível por 3 e 5 ao mesmo tempo.

console.log(findDivisibleBy3And5(30));// retorna bolean

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;
const nome = names.find(findNameWithFiveLetters);
console.log(nome); // retorna o 1º nome do array que possui 5 letras.

console.log(findNameWithFiveLetters('Maria')); // retorna bolean.

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
const findMusic = (id) => musicas.find((musica) => musica.id === id);
  
  console.log(findMusic('31031685'))

  // some && every //

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((encontreNome) => encontreNome === name);

console.log(hasName(names, 'Ana'))

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((idadeMin) => minimumAge <= idadeMin.age);

console.log(verifyAges(people, 18));

  // sort //

  // 1. Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  //  ORDEM CRESCENTE //
  people.sort((a,b) => a.age -b.age) //A CHAVE DO OBJETO DEVE SER PASSADA
  
  console.log(people);
//  ORDEM DECRESCENTE //
  people.sort((a,b) => b.age - a.age) //A CHAVE DO OBJETO DEVE SER PASSADA
  
  console.log(people);