// Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (N) => {
    let resultado = N;
    for(let index = 1; index < N; index +=1) {
      resultado *= index;
    } return resultado;
  }
  console.log(fatorial(4));
  
  // Crie uma função que receba uma frase e retorne qual a maior palavra
  const longestWord = (string) => {
    let bigString = "";
    let wordString = string.split(' ');
    let tamanho = 0;
    for(let word of wordString) {
      if(word.length > tamanho) {
          tamanho = word.length;
          bigString = word;
      }
    }
    return bigString;
  }
   console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
