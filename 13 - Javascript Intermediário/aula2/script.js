
//Seletor por ID
document.querySelector('#titulo').innerHTML = '<i>EXEMPLO</i>'

// SELETOR POR TAG
document.querySelector('a').innerText = '<b>Teste ancora</b>'

// DocumentTimeline.querySelectoAll('a')

//SELECIONANDO MAIS DE 1 ITEM POR TAG

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ //função anonima / callback
    elemento.innerHTML = 'teste'

})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    
    box.innerHTML = 'box' + (index + 1)
    //count++

   // box.innerHTML = 'box' + count
})