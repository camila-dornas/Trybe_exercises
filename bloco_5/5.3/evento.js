const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function alteraTech(event) {
    let tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.classList.add('tech');
    input.valeu = '';
}
divUm.addEventListener('click', alteraTech);
divDois.addEventListener('click', alteraTech);
divTres.addEventListener('click', alteraTech);

//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('input', (event) => {
    let tech = document.querySelector('.tech');
    tech.innerText = event.target.value;
});

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', () => {
    window.location.replace('https://github.com/camila-dornas');

});

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'green' 
});
myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'unset';
})

//6. FUnção que reseta o texto das caixas
function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);