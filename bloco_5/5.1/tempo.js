// Corpo da página //
let corpo = document.getElementById('container');
corpo.style.backgroundColor = 'rgb(216, 216, 216)';

// // Cabeçalho - h1 //
let cabecalho = document.getElementById("header-container");
cabecalho.innerText = 'Administrador do Tempo da Trybe';
cabecalho.style.color = 'rgb(142, 223, 95)';
cabecalho.style.padding = '20px';
cabecalho.style.fontSize = '30px';
cabecalho.style.backgroundColor = 'black';
cabecalho.style.fontWeight = '700'

// // sessão urgente //
// let sessaoUrgente = document.getElementsByClassName("emergency-tasks");
// sessaoUrgente.style.backgroundColor = 'rgb(230, 194, 164)';

// titulo 1 sessao urgente //
let sub1 = document.getElementById("sub1");
sub1.innerText = 'Urgente e Importante';
sub1.style.color = 'rgb(7, 95, 122)';
sub1.style.marginTop = '10px';
sub1.style.padding = '10px';
sub1.style.backgroundColor = 'rgb(230, 194, 164)'

// titulo 2 sessao urgente //
let sub2 = document.getElementById("sub2");
sub2.innerText = 'Urgente e Não-Importante';
sub2.style.color = 'rgb(7, 95, 122)';
sub2.style.marginTop = '10px';
sub2.style.padding = '10px';
sub2.style.backgroundColor = 'rgb(230, 194, 164)'

// sessao não urgente //
// let naoUrgente = document.getElementsByClassName("no-emergency-tasks")

// titulo 3 sessao não urgente //
let sub3 = document.getElementById("sub3");
sub3.innerText = 'Não-Urgente e Importante';
sub3.style.color = 'rgb(95, 193, 223)';
sub3.style.marginTop = '10px';
sub3.style.padding = '10px';
sub3.style.backgroundColor = 'rgb(134, 32, 63)';

// titulo 4 sessao não urgente //
let sub4 = document.getElementById("sub4");
sub4.innerText = 'Não-Urgente e Não-Importante';
sub4.style.color = 'rgb(95, 193, 223)';
sub4.style.marginTop = '10px';
sub4.style.padding = '10px';
sub4.style.backgroundColor = 'rgb(134, 32, 63)';

//roda pé da pagina //
let footer = document.getElementById('footer-container');
footer.style.color = 'rgb(142, 223, 95)';
footer.style.fontWeight = '700';
footer.style.textAlign = 'center'
footer.style.backgroundColor = 'rgb(50, 50, 50)'