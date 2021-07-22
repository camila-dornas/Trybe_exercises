function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      
      weekDaysList.appendChild(dayListItem);
     
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //1. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
  function createDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysMonth = document.querySelector('#days');
    for(let index = 0; index < dezDaysList.length; index += 1) {
      let dias = dezDaysList[index];
      let item = document.createElement('li');
      item.innerText = dias;
      // console.log(item);
      daysMonth.appendChild(item);
      if(dias === 24 | dias === 31) {
        item.className = 'day holiday';
      }
      else if (dias === 25) {
        item.className = 'day holiday friday'
      }
      else if (dias === 4 | dias === 11 | dias === 18) {
        item.className = 'day friday';
      }
      else {
        item.className ='day';
      }
    }  
  } 
  createDays();
  //2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  //4.Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function createButton(string, id) {
  let paiDosBotoes = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.id = id;
  paiDosBotoes.appendChild(botao);
  botao.innerText = string;
} 
createButton('Feriados', 'btn-holiday');
createButton('Sexta-feira', 'btn-friday');
//3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
function clickHolidays() {
  let itemHoliday = document.querySelectorAll('.holiday');
  let botao = document.querySelector('#btn-holiday');
  botao.addEventListener('click', function() {
    for(let index = 0; index < itemHoliday.length; index += 1) {
      itemHoliday[index].classList.toggle('corFeriado')
    }
  });
} 
clickHolidays();
//5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function clickFriday() {
  let itemFriday = document.querySelectorAll('.friday');
  let botao = document.querySelector('#btn-friday');
  botao.addEventListener('click', function() {
    for(let index = 0; index < itemFriday.length; index += 1) {
      itemFriday[index].classList.toggle('corSexta')
    }
  });
} 
clickFriday();
//.6 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.