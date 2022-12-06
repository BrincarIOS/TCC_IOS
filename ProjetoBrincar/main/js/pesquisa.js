let pesquisa = document.getElementById('pesquisa')
let lista = document.getElementsByClassName('container-texto');
var item = document.getElementsByClassName('tipo');

console.log(ite);
console.log(lista)

function buscar(){
    for(i = 0; i < lista.length; i++){
        let valor = lista[i].getElementsByTagName('span');
        console.log(document.getElementsByClassName('tipo'));
    }
}

pesquisa.addEventListener('keyup', buscar);