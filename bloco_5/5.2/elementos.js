//1. Acesse o elemento elementoOndeVoceEsta .
let elementOndeVcTa = document.getElementById('elementoOndeVoceEsta');
console.log(elementOndeVcTa);
//2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('pai');
console.log(elementOndeVcTa.parentElement);
//3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let filho1 = document.getElementById('primeiroFilho');
filho1.innerText = '1º FILHO DE FABIANA - DUDA ';
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
/////////////// PARTE 2 //////////////////
//1. Crie um irmão para elementoOndeVoceEsta .
let irmaoEmprestado = document.createElement('div');
irmaoEmprestado.id = "irmaoEmprestado"
let cria = pai.insertBefore(irmaoEmprestado, elementOndeVcTa)
irmaoEmprestado.innerText = 'IRMÃ EMPRESTADA DE FABIANA - LIVIA'
console.log(irmaoEmprestado)
//2.Crie um filho para elementoOndeVoceEsta .
let filhoEmpestado = document.createElement('div');
filhoEmpestado.id = 'filhoEmprestado'
elementOndeVcTa.appendChild(filhoEmpestado);
filhoEmpestado.innerText = '3º FILHO DE GUSTAVO - FELIPE'
// 3. Crie um filho para primeiroFilhoDoFilho .
let camila = document.getElementById('primeiroFilhoDoFilho');
camila.innerText = '1º FILHO DE GUSTAVO - CAMILA';
let filhoCamila = document.createElement('div');
filhoCamila.id = 'filhoDeCamila';
camila.appendChild(filhoCamila);
filhoCamila.innerText = 'FILHO DE CAMILA - NETO DE GUSTAVO - BISNETO DE FABIANA - TATARANETO DE CARLOS'
//4. A partir desse filho criado, acesse terceiroFilho .
//Será preciso retornar 2 pais para chegar ao próximo elemento
console.log(filhoCamila.parentElement.parentElement.nextElementSibling);
/////////////// PARTE 3 //////////////////
let filho4 = document.getElementById('quartoEUltimoFilho');
filho4.innerText = '4º E ULTIMO FILHO DE CARLOS - PRISCILLA'
let filho3 = document.getElementById('terceiroFilho');
filho3.innerText = '3º FILHO DE CARLOS - AMANDA';
let paizao = document.getElementById('paiDoPai');
pai.removeChild(irmaoEmprestado);
pai.removeChild(filho4);
pai.removeChild(filho3);
console.log(pai.children)

//Adiciona nome ao 2º filho de elemento onde vc esta
let marcos = document.getElementById('segundoEUltimoFilhoDoFilho')
marcos.innerText = "2º FILHO DE GUSTAVO - MARCOS"




















///////////////////////////

//Adiciona um texto ao elemento pai do pai
// let paizao = document.getElementById('paiDoPai');
// paizao.innerText = 'Paizão' -----> retira todos os filhos e escreve o texto

///////////////////////////
