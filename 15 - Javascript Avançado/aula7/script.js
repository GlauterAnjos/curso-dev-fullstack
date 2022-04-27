/*

JSON

JAVSCRIPT OBJECT NOTATION


Antes o sistema se comunicava por XML


*/

const objeto = {
    nome: 'fulano',
    idade: 23,
}
//Para transformar objeto em json
const json = JSON.stringify(objeto)
//Para transformar json em objeto
const jsonParseado = JSON.parse(json)


console.log(jsonParseado.idade)