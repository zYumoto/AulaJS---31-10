const objicaro = {
    nome: 'icaro',
    idade: 19,
    foialuno: true
};
objicaro.altura = 1,73;


console.log(objicaro);
console.log(typeof objicaro);

let nome = objicaro.nome;
console.log('valor da propriedade nome:', nome);
console.log('compriemnto da propriedade nome', nome.length);
console.log('tipo da propriedade nome', nome.typeof)
console.log('altura é:', objicaro.altura);

let arrayObj = [
    objicaro,
    objicaro,
    objicaro
]

console.log(arrayObj);
console.table(arrayObj)

const arrayObjNotas = [
    {nome: 'batman', p1: 7, p2: 5},
    {nome: 'corno', p1: 9, p2: 4.5},
    {nome: 'jose', p1: 8, p2: 7},

]

console.table(arrayObjNotas);

const stringJSON = JSON.stringify(arrayObjNotas);
console.log ('objeto js para JSON', stringJSON);

const arrayObjJSON = JSON.parse(stringJSON);
console.log(arrayObjJSON);
