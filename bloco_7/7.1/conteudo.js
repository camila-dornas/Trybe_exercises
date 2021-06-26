// PARTE 1 --- VAR, LET, CONST//
function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
}
  userInfo();

  if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  // PARTE 2 --- TEMPLATE LITERALS //

const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!'); // utiliza aspas simples, sinal de add e strings vazias

const meuNome = "Isabella"
console.log(`Welcome ${myName}!`); // utiliza crases do inicio ao fim da frase e as vaariáveis sao colocadas dentro do escopo

// Com o template literals, quebra-se linhas conforme abaixo:
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// PARTE 3 --- ARROW FUNCTIONS //
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const printNameArrow = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const printNameArrowSimplificado = () => "Lucas"; // FUnção sem corpo, apenas com o que deverá ser retornado
console.log(printName());

// PARTE 4 - TERNARY OPERATOR //
// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression) // isso é mentira

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
    if (age >= 18) {
      return `Você tem idade para dirigir!`;
    } else {
      return `Você ainda não tem idade para dirigir...`;
    }
  };
  
  const checkTernary = (age) => (
    age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
  );
  console.log(checkTernary(21));
  // ------------------------
  
  // Situação em que usar o operador ternário não faz muito sentido:
  const checkIfElse = (fruit) => {
    if (fruit === `maçã`) {
      return `Essa fruta é vermelha`;
    } else if (fruit === `banana`) {
      return `Esta fruta é amarela`;
    } else {
      return `Não sei a cor`;
    }
  };
  
  const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
    : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);
  
  // Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
  // pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
  // operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
  // no futuro!