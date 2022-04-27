const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14},
    { name: 'Ciclano', lastname: 'Santos', age: 18},
    { name: 'Beltrano', lastname: 'Moreira', age: 20},
]
//Uma forma de fazer
const clientesMaiores = clientes.filter(cliente => {
    let retorno = false
    
    if (cliente.name === 'Beltrano'){
        retorno = true
    }

    return retorno
})

//Retorno direto | if TERNÁRIO,  if de uma linha só
const clientessMaiores = clientes.filter(cliente => cliente.age >= 18 )

console.log(clientesMaiores)

/* const clientessMaiores = clientes.filter(cliente => {
    return cliente.age >= 18 ? true : false
})

const clientessMaiores = clientes.filter(cliente => {
    return cliente.age >= 18 
})

const clientessMaiores = clientes.filter(cliente => {
   cliente.age >= 18 
})
*/