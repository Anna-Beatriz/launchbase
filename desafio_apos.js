// Cálculo de aposentadoria

const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const soma = idade + contribuicao
console.log(`Soma: ${soma}`)

if (contribuicao >= 30) {
    if (soma >= 85) {
      console.log(`${nome}, você pode se aposentar!`)
    } else { 
      console.log('Você precisa ter mais idade ou mais tempo de contribuição!')
    }
  } else {
    console.log(`${nome}, você não pode se aposentar!`)
  }