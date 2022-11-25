let btnActive = false;
let menuPadrao = document.querySelector("#menuSuperior");
let posicaoPadrao = menuPadrao.getBoundingClientRect();
const padrao = posicaoPadrao.top;
console.log(padrao);

function menuSelected(){
    btnActive = !btnActive;
}

function onTheScreen(){
    let menuSuperior = document.querySelector("#menuSuperior");
    let posicao = menuSuperior.getBoundingClientRect();
    let bot = posicao.bottom;
    let top = posicao.top;

    let menuOculto = document.querySelector("#menuOculto");
    let posicao2 = menuOculto.getBoundingClientRect();
    let bot2 = posicao2.bottom;
    let top2 = posicao2.top;
    if(btnActive){
        if(top <= 0){
            menuSuperior.style.transform = "translateX(-1000px)"
            menuOculto.style.transform = "translateY(1000px)";
            console.log(top2);
            console.log(top);
        } else if(top2 == padrao) {
            menuSuperior.style.transform = "translateX(1000px)"
            menuOculto.style.transform = "translateY(-1000px)";
        }
    }
}