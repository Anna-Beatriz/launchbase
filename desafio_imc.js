// Cálculo de IMC e nível de obesidade

const nome = 'Carlos'
const peso = 106
const altura = 1.88

const imc = peso / (altura* altura)

console.log(imc.toFixed(2))

if (imc < 29.99) {
    console.log(`${nome}, você não está acima do peso!`)
} else {
    console.log(`${nome}, Você está acima do peso!`)
}