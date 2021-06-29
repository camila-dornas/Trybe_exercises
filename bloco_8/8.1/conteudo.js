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

// ////
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
const isDivisible = numbers.find(findDivisibleBy3And5);console.log(isDivisible); // retorna o 1º nº do array que é divisível por 3 e 5 ao mesmo tempo.

console.log(findDivisibleBy3And5(30));// retorna bolean

// ////
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;
const nome = names.find(findNameWithFiveLetters);
console.log(nome); // retorna o 1º nome do array que possui 5 letras.

console.log(findNameWithFiveLetters('Maria')); // retorna bolean.

// ////
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
const findMusic = (id) => id === '31031685';
const music = musicas.find(findMusic)
console.log(music);
  
  console.log(findMusic('31031685'))


