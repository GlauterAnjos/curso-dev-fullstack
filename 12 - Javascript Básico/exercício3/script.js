function entrar() {
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
        anderson = ('<h2> Você é personagem do filme matrix! </h2>')
    }

    let mensagem = (`<h1> Olá ${nome}, você é ${MaisOuMenos} de idade!! </h1> ${anderson} `)

    document.write(`${mensagem}`)
}
