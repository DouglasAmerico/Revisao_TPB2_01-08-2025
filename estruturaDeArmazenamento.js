const prompt = require("prompt-sync")();
let turma = [] 
let quantidade = prompt("Qual a quantidade de alunos: ");
const qtdDeNotas = 3;
 
for (let index = 0; index < quantidade; index++) {
    let aluno = {
        nome: null,
        idade: null,
        nota: [],
        media: 0,
        status: null
    }

    aluno.nome = prompt("Informe o nome do aluno: ");
    aluno.idade = prompt("Informe a idade: ");
    for (let index2 = 0; index2 < qtdDeNotas; index2++) {
        do{
            aluno.nota[index2]= Number(prompt("Informe a nota "+(index2+1)+" do aluno(a) "+aluno.nome+": "));
            if(aluno.nota[index2] < 0 || aluno.nota[index2] > 10) console.log("A nota deve ser entre 0 e 10");
        }while(aluno.nota[index2] < 0 || aluno.nota[index2] > 10);
        
        aluno.media = aluno.media + aluno.nota[index2];
    }
    aluno.media = aluno.media/qtdDeNotas;
    if(aluno.media >= 7){
        aluno.status = "Aprovado";
    }else if(aluno.media >= 4){
        aluno.status = "Exame";
    }else{
        aluno.status = "Reprovado";
    }
    turma.push(aluno);
}


console.log(turma);


