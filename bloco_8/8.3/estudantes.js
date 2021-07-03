// 2. LIsta de estudantes de uma escola
const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// 2.a) Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

// 1º Criar uma função que encontre as chaves "nome" e "sobrenome".
// 2º Concatenar as chaves encontradas, transformando em apenas uma chave ("nome completo").
// 3º Filtrar todos os nomes completos dos estudantes do turno da manhã.
// 4º Imprimir um array com o nome completo de todos os estudantes do turno da manhã.

const fullName = estudantes.filter((estudante) => estudante.turno === "Manhã").map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(fullName);

//2.b) Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

const situaçaoEstudante = (name, array) => array.find((estudante) => estudante.nome === name).materias.map((materias) => `${materias.name} ${(materias.nota >= 60) ? "Aprovado" : "Reprovado"}`);

console.log(situaçaoEstudante ('Wilson', estudantes));

