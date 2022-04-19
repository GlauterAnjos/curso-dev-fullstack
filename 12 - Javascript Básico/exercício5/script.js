let inputTabuada = prompt('Qual tabuada você quer saber?')

let tabuada = parseInt(inputTabuada)

for (contador = 0; contador <= 10; contador ++) {
let resultado = tabuada * contador

let mensagem = `${tabuada} x ${contador} = ${resultado} <br>`

document.write(mensagem)
}