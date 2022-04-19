let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7


let media = (nota1 + nota2) / 2



if (media >= mediaMinima) {
    document.write ('Ok, passou de ano')
} else if (media < mediaMinima) {
    document.write ('Ops, não passou de ano!')
}

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write ('NOSSA! Você foi muito bem, continue assim!!')
} else if (media >= mediaMinima && media === 9) {
    document.write ('Você mandou bem! Vamos tentar chegar a média 10?!')
} else if (media < mediaMinima && media === 6) {
    document.write ('Você quase passou de nao, por favor estude mais!!')
} else if (media < mediaMinima && media === 5) {
    document.write ('Você foi ruim, foque nos estudos!!')
}  else if ( media < mediaMinima && media <= 6) {
    document.write ('Você é um merda')
}
