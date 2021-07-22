//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.getElementsByTagName('body');
let h1 = document.createElement('h1');
h1.className = 'title';
document.body.appendChild(h1);
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
//2. Adicione a tag div com a classe main-content como filho da tag body ;
let main = document.createElement ('div');
main.className = 'main-content'
document.body.appendChild(main);
// console.log(main)
//3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let center = document.createElement('div');
center.className = 'center-content';
main.appendChild(center);
// console.log(center)
//4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragrafo = document.createElement('p');
center.appendChild(paragrafo);
paragrafo.innerText = 'PARÁGRAFO DO ELEMENTO CRIADO NO PASSO 3'
//5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let left = document.createElement('div');
left.className = 'left-content'
main.appendChild(left);
// console.log(left)
//6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let right = document.createElement('div');
right.className = 'right-content';
main.appendChild(right);
// console.log(right)
//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200 ';
left.appendChild(image);
//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let list =  document.createElement('ul');
right.appendChild(list);
let array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for(let key in array) {
    let item = document.createElement('li');
    item.innerText = array[key];
    item.id = 'itemDaLista'
    list.appendChild(item);
};
//9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let arrayH3 = ['titulo 1', 'titulo2', 'titulo3']
for(let key in arrayH3) {
    let h3 = document.createElement('h3');
    h3.className = "description"
    h3.innerText = arrayH3[key]
    main.appendChild(h3);
}
//10. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(left)
//11. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
right.style.marginRight = 'auto'
//12. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
center.style.backgroundColor = 'green'
//13. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
console.log(list);
let item = document.getElementById('itemDaLista');
console.log(item.parentElement);
list.removeChild(list.lastChild.previousSibling);
list.removeChild(list.lastChild)