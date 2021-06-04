//1. Acesse o elemento elementoOndeVoceEsta .
let elementOndeVcTa = document.getElementById('elementoOndeVoceEsta');
elementOndeVcTa.innerText = 'Elemento onde você está (2º filho do pai)';
//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('pai');
console.log(elementOndeVcTa.parentElement);
//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let filho1 = document.getElementById('primeiroFilho');
filho1.innerText = 'Primeiro Filho do pai';
//4. Acesse o primeiroFilho a partir de pai.
console.log(pai.firstElementChild);
//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementOndeVcTa.previousElementSibling);
//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(elementOndeVcTa.nextSibling);
//7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(elementOndeVcTa.nextElementSibling);
//8. Agora acesse o terceiroFilho a partir de pai.
console.log(pai.childNodes);
console.log(pai.lastElementChild.previousElementSibling);
///////////////////////////
//Adiciona um texto ao elemento terceiro filho
let filho3 = document.getElementById('terceiroFilho');
filho3.innerText = 'Terceiro filho';
//Adiciona um texto ao elemento pai do pai
let paizao = document.getElementById('paiDoPai');
// paizao.innerText = 'Paizão' -----> retira todos os filhos e escreve o texto
// Adciona um texto ao elemento quarto filho
let filho4 = document.getElementById('quartoEUltimoFilho');
filho4.innerText = 'Quarto filho e também o último'
// Adicona um texto ao 1º filho do filho
let filhoFilho1 = document.getElementById('primeiroFilhoDoFilho');
filhoFilho1.innerText = 'Filho do 2º filho do paizão' // RETORNA ERRO DE ELEMENTO NULO
elementOndeVcTa.firstChild.innerText = 'FILHÃO' // NÃO FUNCIONA