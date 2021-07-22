// Mostra a quantidade de ítens no array
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(taskList.length);
//Coloca o array em ordem alfabética/numérica
console.log(taskList.sort());
// Mostra qual ítem esta na posição do índice escolhido
let searchForFirstTask = taskList[0];

console.log(searchForFirstTask);
// Mostra o último ítem do array
let searchForLastTask = taskList[taskList.length - 1];

console.log(searchForLastTask);
//Acrescenta um ítem ao final do array
taskList.push('Exercises Trybe');

console.log(taskList)
//Deleta um ítem ao final do array
taskList.pop();

console.log(taskList);
//Acrescenta um ítem no início do array
taskList.unshift('Exercises Trybe');

console.log(taskList);
//Deleta um ítem no início do array
taskList.shift();

console.log(taskList);
//Encontra o índice de um ítem do array
let indexOfTask = taskList.indexOf( 'Reunião');

console.log(indexOfTask);