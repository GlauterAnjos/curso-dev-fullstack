
let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

//botaoTeste.onclick = function(){
//  alert('ok')
//}


function cliqueBotao(){
    contador++

    console.log('mensagem1')


    if(contador >= 5) {
        botaoTeste.removeEventListener( 'click', cliqueBotao)
    }
}

//addEventListener
botaoTeste.addEventListener('click', cliqueBotao)

/*botaoTeste.addEventListener('click',function(){
  console.log('mensagem2')
})*/

//onclick
//botaoTeste.onclick = cliqueBotao
