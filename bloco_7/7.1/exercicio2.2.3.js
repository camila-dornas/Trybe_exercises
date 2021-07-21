  // Crie uma página que contenha:
  // Um botão ao qual será associado um event listener ;
  // Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
  // Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

  const clickCount = () => {
    const bnt = document.querySelector('#clickCountButton');
    const input = document.getElementById('clickCount');
    let clicks = 0;
    bnt.addEventListener('click', contador => {
        if(contador.click === true) {
          clicks += 1;
          input.innerHTML = clicks;
        }
    });
  }
  clickCount();