/*

LOCAL STORAGE

ARMAZENAMENTO LOCAL

Vamos armazenar determinado dado no nevagador do usuario


*/

const tarefas = [
    {tarefa: 'estudar js'},
    {tarefa: 'estudar node.js'},
    {tarefa: 'estudar react.js'},
]

const tarefasJson = JSON.stringify(tarefas)



localStorage.setItem('tarefas', tarefasJson)


const listaTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaTarefasSalvas)

console.log(listaTarefasObj)