function estado(text) {
  const estado = document.querySelector('#estado');
  for(let index = 0; index <= 28; index +=1) {
    let options = document.createElement('option');
    estado.appendChild(options);
    options.className = 'options';
    options.value = text
  };
}
estado('Minas Gerais');