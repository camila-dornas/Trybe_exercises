////utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão
// IMPRIME CADA VALOR DOS ÍNDICES
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
};

for(let key in names) {
    console.log('Olá ' + names[key]);
}
//IMPRIME AS CHAVES DOS ELEMENTOS (PERSON1, PERSON2, PERSON3)

for(let key in names) {
    console.log(key);
}

//IMPRIME O PRÓPRIO OBJETO COMPLETO

for(let key in names) {
    console.log(names);
}

//IMPRIME O VALOR DE UM ELEMENTO ESPECÍFICO DO OBJETO

for(let key in names) {
    console.log(names.person2);
}

//IMPRIME CADA CHAVE + O VALOR CORRESPONDENTE 
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(let key in car) {
    console.log(key, car[key])
};


