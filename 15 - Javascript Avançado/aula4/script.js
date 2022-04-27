const clientes = [
    { name: 'Fulano', lastname: 'Da Silva'},
    { name: 'Ciclano', lastname: 'Santos'},
    { name: 'Beltrano', lastname: 'Moreira'},
]

//Uma FORMA DE FAZER
let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)

//Outra forma de fazer com o Map

const clientesFinalMap = clientes.map(cliente =>  cliente.name + ' ' + cliente.lastname)

console.log(clientesFinalMap)