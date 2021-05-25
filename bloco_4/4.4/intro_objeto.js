let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
      golden: 2,
      silver: 3
  },
  bestInTheWord: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// Concatena a variável name e lastName na variável fullName:

player['fullName'] = player.name + ' ' + player.lastName;

//Utiliza propriedades length para mostrar o tamanho do array:

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor jogadora do mundo por ' + player.bestInTheWord.length + ' vezes' );

//Utiliza um objeto dentro de outro objeto:

console.log('A jogadora ' + player.fullName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');
