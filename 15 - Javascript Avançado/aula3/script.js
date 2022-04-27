/*
   ARROW FUNCTIONS


   ES6

   AS FUNÇÕES DE SETA NOS PERMITEM ESCREVER UMA SINTAXE DE FUNÇÃO MAIS CURTA
*/

// Retorno Implicito
const soma = (param1, param2) =>  param1 + param2

const resultado = soma(1, 2)

console.log(resultado)

// Qunado tem um parametro pode remover o parenteses
const teste = param1 => param1

console.log(teste('ok'))




const botao = document.querySelector('#botao')

botao.onclick = () => {
    console.log(this)
}