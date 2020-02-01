// Programa que calcula a média das notas
// entre alunos e mostra se
// a turma foi bem ou mal. (Condicionais)

const aluno1 = 'Anna'
const notaAluno1 = 9.8

const aluno2 = 'Beatriz'
const notaAluno2 = 10

const aluno3 = 'Luna'
const notaAluno3 = 2

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns para a turma!`)
} else {
    console.log('A turma não foi bem.')
}