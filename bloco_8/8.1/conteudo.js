// FIRST-CLASS FUNCTIONS //
// ------> Atrbuir funções à variàveis <------ //
const sum = (a, b) => a + b;
// ------> Passar funções como argumento para outras funções <------ //
const sayHello = () => {
    console.log('hello trybers');
  }
  
  setTimeout(sayHello, 1000);
  // ------> Retornar uma função de outra função <------ //
  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }

  // HIGHER ORDER FUNCTIONS //
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

 // ESTRUTURANDO UMA HIGHER ORDER FUNCTIONS //
 const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

// --> Verificar numeros pares <-- //
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });


// --> Verificar numeros pares e ímpares <-- //
  const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

// --> FIXANDO O CONTEÚDO <-- //

const string1 = 'Acordando!!';
const string2 = 'Bora toar café!!';
const string3 = 'Partiu dormir!!';

const acordando = (string1) => {
  console.log(string1);
}

const cafe = (string2) => {
  console.log(string2);
}

const dormir = (string3) => {
  console.log(string3);
}

const doingThings = (acordando) => acordando(string1);

console.log(doingThings(acordando));