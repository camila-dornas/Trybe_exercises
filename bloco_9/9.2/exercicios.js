// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const obj = {
        method:'GET',
        headers:  { 'Accept': 'application/json' }
    };
    fetch(API_URL, obj)
        .then(response => response.json())
        .then(data => document.getElementById('jokeContainer').innerText = data.joke);
        
};

const promises = () => {
  const promise = new Promise((resolve, reject) => {
    const newarray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
        const sumArray = newarray.map(number => number * number).reduce((acumulador, number) => acumulador + number, 0); // Poruqe para realizar a divisão no then, precisei acrescentar o 0 aqui??
        (sumArray < 8000) ? resolve() : reject();
        // (Math.pow(sumArray, 2) < 8000) ? resolve () : reject (); // Porque não funciona??
  });
// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

    // promise
    //   .then((sumArray => [2, 3, 5, 10].map(number => sumArray / number)))
    //   .catch(() => console.log('Promise rejeitada'))

// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

    //   promise
    //   .then((sumArray => [2, 3, 5, 10].map(number => sumArray / number)))
    //   .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

     promise
     .then((sumArray => [2, 3, 5, 10].map(number => sumArray / number)))
     .then(array => array.reduce((acumulador, number) => acumulador + number, 0))
      .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};
promises();

window.onload = () => fetchJoke();

