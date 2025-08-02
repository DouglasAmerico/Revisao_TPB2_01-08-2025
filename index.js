const prompt = require("prompt-sync")();

let quantidade = prompt("Informe a quantidade de alunos: ");
let nomes = [];

for (let index = 0; index < quantidade; index++) {
    nomes[index] = prompt("Informe o nome do aluno: ");
}

console.log(nomes);
