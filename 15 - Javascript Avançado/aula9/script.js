/*

SINCRONO VS ASSINCRONO


*/

function primeira() {
    console.log('primeira')
    // for (let index = 0; index < 1000000000; index++) // for é sincrono
}

function segunda() {
    console.log('segunda')
}

// setTimeout(primeira, 2000) // ASSINCRONO, É UM CÓDIGO QUE NÃO ESPERA A EXECUÇÃO PARA CONTINUAR, UM EXEMPLO É QUANDO CONSULTAMOS UM API, ENTÃO O CÓDIGO ASSINCRONO É ALGO QUE MANDA EXECUTAR E PASSA PARA ELE UM CALLBACK, UMA FUNÇÃO QUE VAI SER EXECUTADA QUANDO TERMINAR O PROCESSAMENTO, MAS O CÓDIGO PODE FUNCIONAR NORMALMENTE.

//SICRONO
primeira()

segunda()