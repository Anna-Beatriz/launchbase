// Crie um programa com um objeto para armazenar 
// dados de um programador como nome, idade e 
// tecnologias que trabalha.

const programador = {
    Nome: 'Carlos',
    Idade: 32,
    Tecnologias: [
        {
            Nome: 'C++',
            Especialidade: 'Desktop',
        },
        {
            Nome: 'JavaScript',
            Especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${programador.Nome} tem ${programador.Idade} anos e usa a tecnologia ${programador.Tecnologias[0].Nome} com especialidade em ${programador.Tecnologias[0].Especialidade}.`)
