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
        nota: 4
    }
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const mediaA = calculaMedia(alunosTurmaA)
const mediaB = calculaMedia(alunosTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns para a turma!`)
    } else {
        console.log(`A média da ${turma} foi de ${media}. A turma não foi bem.`)
    }
}

enviaMensagem(mediaA.toFixed(2), 'turma A')
enviaMensagem(mediaB.toFixed(2), 'turma B')