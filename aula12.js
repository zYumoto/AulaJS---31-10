/* 
indexOf, descobre a posição de um elemento no array
shallow copy, copia juntos e shallow now pra não destruir o array original
slice - copia do array inteiro
[...array] - espelhamento
*/

const arrayInimigos = [
    "Max",
    "Rodrigo",
    "Laryssa",
    "Max",
    "Icaro",
    "Max",
    "Vitor",
    "Max",
    "Max",
];

//function RetornaIndice(array, elemento){ return array.indexOf(elemento);}
//console.log(RetornaIndice(arrayInimigos, "Icaro"));

/*function ApagaElemento(array, elemento){ 
    apagar = array.indexOf(elemento);
    return (apagar != -1)? array.splice(apagar,1) : false;
}

console.log ("O elemento apagado foi", ApagaElemento(arrayInimigos, "Max"));

console.log(arrayInimigos); */

/* function ApagaElementos(arr, elemento){ 
    let array = arr.slice();
    let apagar = array.indexOf(elemento);
    while(apagar != -1){
    array.splice(apagar,1);
    apagar = array.indexOf(elemento);
    }
    return array;
}

let arrayAtualizado;
console.log(arrayInimigos);
arrayAtualizado = ApagaElementos(arrayInimigos, "Max");
console.log(arrayAtualizado);
console.log(arrayInimigos); */

function estaNoArray (array, elemento){
let item = array.includes(elemento);
return (item == true)? "Sim" : "Não";    
}

console.log(estaNoArray(arrayInimigos, "Max"));