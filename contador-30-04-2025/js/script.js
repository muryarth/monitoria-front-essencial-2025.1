var contagem = 0;

function aumentarContagem() {
    var texto = document.getElementById('texto-contagem');

    contagem++;

    texto.textContent = contagem;
}