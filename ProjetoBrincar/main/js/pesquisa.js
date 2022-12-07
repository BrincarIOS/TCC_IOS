let pesquisa = document.getElementById('pesquisa');
let lista = document.getElementsByClassName('containerCard01');

pesquisa.addEventListener('keyup', buscar);

function buscar() {
    let input = document.getElementById('pesquisa').value;
    input = input.toLowerCase();
    console.log(input);
    if(input == ''){
        for(i = 0; i < lista.length; i++){
            lista[i].style.display = 'flex'
        }
    }
    for (i = 0; i < lista.length; i++) {
        let texto = lista[i];
        texto = texto.value;
        console.log(texto);
        interno: for (j = 0; j < input.length; j++) {
            if (input[j] == texto[j]) {
                lista[i].style.display = 'flex';
            } else {
                lista[i].style.display = 'none';
                break interno;
            }
        }
    }
}