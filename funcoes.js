const prompt = require("prompt-sync")();
let turma = [] 
let quantidade = prompt("Qual a quantidade de alunos: ");
const qtdDeNotas = 3;
 
const validacaoDeNotas = (identificadorDeNota,nomeAluno) => {
    let nota;
    do{
        nota= Number(prompt("Informe a nota "+(identificadorDeNota+1)+" do aluno(a) "+nomeAluno+": "));    
        if(nota < 0 || nota > 10) console.log("A nota deve ser entre 0 e 10");
    }while(nota < 0 || nota > 10);

    return nota;
}

const comparativoDeNotas = (media) => {
    let status;
    if(media >= 7){
        status = "Aprovado";
    }else if(media >= 4){
        status = "Exame";
    }else{
        status = "Reprovado";
    }
    return status;
}

const visualizacaoDeTurma = (arrayTurma,qtdAlunos) =>{
    for (let index = 0; index < qtdAlunos; index++) {
       console.log("Aluno: "+arrayTurma[index].nome+" com a idade "+arrayTurma[index].idade+ " com as notas "+arrayTurma[index].nota+" com a media "+arrayTurma[index].media+" com o Status "+arrayTurma[index].status);  
    }
}

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
        aluno.nota[index2] = validacaoDeNotas(index2,aluno.nome);
        
        aluno.media = aluno.media + aluno.nota[index2];
    }
    aluno.media = aluno.media/qtdDeNotas;
    aluno.status = comparativoDeNotas(aluno.media);
    turma.push(aluno);
}


visualizacaoDeTurma(turma,turma.length);