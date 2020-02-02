// Array com função. Verificar se usuário trabalha com CSS.

const usuarios = [
    { 
        nome: 'Carlos', 
        tecnologias: ['HTML', 'CSS'] 
    },

    { 
        nome: 'Jasmine', 
        tecnologias: ['JavaScript', 'CSS'] 
    },

    { 
        nome: 'Tuane', 
        tecnologias: ['HTML', 'Node.js'] 
    },

    { 
        nome: 'Anna', 
        tecnologias: ['CSS', 'Node.js'] 
    }
]


// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
function usaCSS(usuario) {
    const tecnologias = usuario.tecnologias

    for (let i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i] == 'CSS') {
            // se encontrar, retorne true da função, caso contrário retorne false.
            return true
        }
    }
    return false
}

// Imprima em tela as informações do usuário que trabalha com CSS.
for (let i = 0; i < usuarios.length; i++) {
    const trabalhaComCSS = usaCSS(usuarios[i])
  
    if(trabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
  }
