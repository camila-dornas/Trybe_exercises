// 1. Imprima um quadrado //
//variável que representa o tamanho do quadrado ---> n
//variável que representa o símbolo utilizado ---> desenho
//variável para guardar o resultado do for ---> quadado
//comando que repita n vezes o meu símbolo em linhas diferentes ---> for 1
//comando que repita n vezes meu símbolo na mesma linha ---> for 2
//comando que imprima a repetição ---> console.log

let n = 5;
let desenho = '*';
let quadrado = '';

for(let index = 0; index < n; index += 1) {
   quadrado = quadrado + desenho;
};
for(let index = 0; index < n; index += 1) {
    console.log(quadrado);
};
// 2. Triangulo reto //
let n = 5;
let desenho = '*';
let quadrado = '';

for(let index = 0; index < n; index += 1) {
   quadrado = quadrado + desenho;
   console.log(quadrado)
}
// 3. Triangulo reto invertido //
let n = 5;
let desenho = '*';
let quadrado = '';
let position = n

for(let index = 0; index < n; index += 1) {
   for(let i = 0; i <= n; i += 1) {
       if (i < position) {
           quadrado = quadrado + ' ';
   } else {
       quadrado = quadrado + desenho;
   }
}
console.log(quadrado);
quadrado = '';
position -= 1;
};
// 4. Faça uma pirâmide //
let n = 5;
let desenho = '*';
let quadrado = '';
let middel = (n + 1) / 2;
let positionDireita = middel;
let positionEsquerda = middel;

for(let index = 0; index <= middel; index += 1) {
    for(let i = 0; i <= n; i += 1) {
        if (i < positionDireita && i > positionEsquerda) {
            quadrado = quadrado + desenho;
    } else {
        quadrado = quadrado + ' ';
    }
 }
 console.log(quadrado);
 quadrado = '';
 positionDireita += 1;
 positionEsquerda -= 1;
}