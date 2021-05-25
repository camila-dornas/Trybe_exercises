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
}
for(let index = 0; index<n; index += 1){
    console.log(quadrado)
}
