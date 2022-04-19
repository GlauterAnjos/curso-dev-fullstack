let nome = prompt('Digite o seu nome')
let inputIdade = prompt('Digite a sua idade')

let idade = parseInt(inputIdade)

let anderson = ''

let MaisOuMenos

if (idade >= 18) {
    MaisOuMenos = 'maior'
} else if (idade < 18) {
    MaisOuMenos = 'menor'
}

if (idade >=18 && nome === 'Thomas Anderson' || nome === 'thomas anderson') {
    anderson = ('Você é personagem do filme matrix!')
}

let mensagem = (`Olá ${nome}, você é ${MaisOuMenos} de idade!! ${anderson} `)

document.write(`${mensagem}`)

