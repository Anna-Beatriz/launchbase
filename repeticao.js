const alunosTurmaA = [
    {
        nome: "Anna",
        nota: 7
    },
    
    {
        nome: "Beatriz",
        nota: 6
    },
    
    {
        nome: "Luna",
        nota: 2
    }
]

const alunosTurmaB = [
    {
        nome: "Dayanne",
        nota: 10
    },
    
    {
        nome: "Cida",
        nota: 10
    },
    
    {
        nome: "Amanda",
        nota: 6
    },

    {
        nome: 'João',
        nota: 4
    },

    {
        nome: 'Maria',
        nota: 2
    }
]

function calculaMedia(alunos) {
    let soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const mediaA = calculaMedia(alunosTurmaA)
const mediaB = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns para a turma!`);
    } else {
        console.log(`A média da ${turma} foi de ${media}. A turma não foi bem.`);
    }
}

enviaMensagem(mediaA.toFixed(2), 'turma A')
enviaMensagem(mediaB.toFixed(2), 'turma B')
