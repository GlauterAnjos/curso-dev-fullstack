
let opcoes

for (let contador = 1900; contador <= 2021; contador++) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes


let lista = ''

let clientes = ['Thiago', 'Rafael', 'Fulano', 'Ciclano']

for (let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista