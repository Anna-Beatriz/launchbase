const usuarios = [
    {
      nome: 'David',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },

    {
      nome: 'Diego',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },

    {
      nome: 'Victor',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    },

    {
        nome: 'Luan',
        receitas: [54, 109.3, 260.2, 48.9],
        despesas: [480.2, 59.9]
      }
]

for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i]
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0){
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

function somaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }
    return soma
}

function calculaSaldo(receitas, despesas) {
    let somaReceitas = somaNumeros(receitas)
    let somaDespesas = somaNumeros(despesas)
    let saldo = somaReceitas - somaDespesas
    return saldo
}