/*
    HOISTING (ERGUER)

    Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo de um escopo.
*/

function teste() {
    outraFuncao()


    function outraFuncao() {
        console.log('ok sou outra função')
    }
}

teste()

/* BOA PRÁTICA 
function teste() {
    
    function outraFuncao() {
        console.log('ok sou outra função')
    }

    outraFuncao()
}
*/