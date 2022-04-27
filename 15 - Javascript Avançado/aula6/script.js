const clientes = [
    { name: 'Fulano', score: 34},
    { name: 'Ciclano', score: 38},
    { name: 'Beltrano', score: 80},
    { name: 'Glauter', score: 50},
    { name: 'Bia', score: 98},
]


//acc = acumulator
//curr = current = atual
const clienteFinal = clientes.reduce((acc, curr) => {
    if (curr.score >= 50){
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc 
}, {
    pass: [],
    fail: [],
})

console.log(clienteFinal)


const numeros = [1, 2, 3, 4]


const numerosFinal = numeros.reduce((acc, curr)  => {
    
        acc += `-  ${curr + 1 }  `

        return acc
    
}, '')


console.log(numerosFinal.replace('-', '' ))




/* Uma forma de fazer com o filter | EM ANALISE

const clientesPass = clientes.filter(cliente => cliente.score >= 50)

console.log(clientesPass)

const clientesFail = clientes.filter(cliente => cliente.score < 50)

console.log ({
    pass: [clientesPass],
    fail: [clientesFail],
})
*/
