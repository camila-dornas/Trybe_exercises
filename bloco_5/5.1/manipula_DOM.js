  let titulo = document.getElementsByClassName("title");
  let main = document.getElementsByClassName('main-content');
  let centro = document.getElementsByClassName('center-content')

// 1.  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.//
function alteraParagrafo(){
    let paragrafos = document.getElementsByTagName('p');
    paragrafos[1].innerHTML = 'Em dois anos quero estar formada na Trybe e trabalhando na área de desenvolvimento web!';
}
alteraParagrafo();

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
//3. Crie uma função que mude a cor do quadrado vermelho para branco.
function alteraCor() {
    let divs = document.getElementsByTagName('div');
    divs[0].style.backgroundColor = 'rgb(76,164,109)';
    divs[1].style.backgroundColor = 'rgb(255,255,255)';
}
alteraCor();

//4. Crie uma função que corrija o texto da tag <h1>.
function corrigeTitulo() {
    let h1s = document.querySelector('h1');
    h1s.innerText = 'Exercises JavaScript';
}
corrigeTitulo();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function textoMaiusculo() {
    let paragrafos = document.getElementsByTagName('p');
    paragrafos.innerHTML = paragrafos.innerHTML.toUpperCase();
}
textoMaiusculo(); // não funcionou

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function mostraParagrafos() {
    let paragrafos = document.getElementsByTagName('p');
    for (let index = 0; index < paragrafos.length; index += 1) {
        console.log(paragrafos[index].innerHTML);

    }
}
mostraParagrafos();