// Cálculo de aposentadoria

const nome = 'João'
const sexo = 'M'
const idade = 60
const contribuicao = 36

const soma = idade + contribuicao
console.log(`Soma: ${soma}`)

if (sexo == 'F' && contribuicao >= 30 || sexo == 'M' && contribuicao >= 35) {
    if (contribuicao >= 30 && soma >= 85 || contribuicao >= 35 && soma >= 95) {
      console.log(`${nome}, você pode se aposentar!`)
    } 
} else {
    console.log(`${nome}, você não pode se aposentar!`)
  }