/////////////// PARTE 1 - ADICIONANDO CHAVES /////////////
// Formas de adicionar chaves ao objeto //
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

customer.lastName = 'Faria';
customer['middleName'] = 'Silva';
console.log(customer);

// Função para adicionar uma chave e retornar o objeto com a chave adicionada //
function teste(objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto
}
console.log(teste(customer, 'fullName', 'Roberto Silva Faria'));

// Função utilizando arrow, que retorna apenas a chave adicionada //
const função = (objeto, chave, valor) => objeto[chave] = valor;
console.log(função(customer, 'fullName', 'Roberto Silva Faria'));

/////////////// PARTE 2 - OBJECT.KEYS /////////////
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

function habilidades(objeto) {
  const array = Object.keys(objeto);
  for(let index in array){
    console.log(`${array[index]}, Nível: ${objeto[array[index]]}`);
  };
}

console.log(habilidades(student1));
console.log(habilidades(student2));

/////////////// PARTE 3 - OBJECT.VALUES /////////////
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

console.log(listSkillsValuesWithFor(student));

// Utilizando object.values //
const listSkillsValuesWithValues = (objeto) => Object.values(objeto);

console.log(listSkillsValuesWithValues(student));

/////////////// PARTE 4 - OBJECT.ENTRIES /////////////
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
console.log(pairKeyValue);

/////////////// PARTE 5 - OBJECT.ASSIGN /////////////
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone);
console.log(person);
console.log('--------------');

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); 
console.log(person);
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone);
console.log(person);
console.log('--------------');

console.log('Ao clonar um objeto, o objeto de destino também é alterado');
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

console.log(obj);
console.log('--------------');


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';

console.log('Clonando um objeto, sem alterar o original');
console.log(newPerson);
console.log(person);