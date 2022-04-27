/*
global
local

-O escopo determina a visibilidade de uma variavel

- As fubnções no JS CRIAM O SEU PRÓPIO ESCOPO

- AS VARIÁVEIS DE UMA FUNÇÃO NÃO SÃO ACESSIVEIS FORA DELA
*/

/* Vriavel no escopo global*/ 
let a = 123

function teste() {
     a = 123
    console.log(a)
}


/* Vriavel no escopo local - Tudo que estiver dentro de chaves, variaveis declarada dentro das chaves só vai existir dentro das chaves*/ 
function teste() {
    let a = 123
    console.log(a)
}

teste()
