const btnMenos = document.getElementById("menos");
const btnMais = document.getElementById("mais");
const displaySpan = document.getElementById("numero");
const btnreset = document.getElementById("btn-reset");

let numeroAtual = 0;

function atualizarDisplay() {
     displaySpan.textContent = numeroAtual;
    if (numeroAtual > 0){
        displaySpan.style.color = "green";
    } else if (numeroAtual < 0){
        displaySpan.style.color = "red";
    } else {
        displaySpan.style.color = "";
    }
}

btnMenos.addEventListener('click', function () {
    numeroAtual--;
    atualizarDisplay();
});

btnMais.addEventListener('click', function () {
    numeroAtual++;
    atualizarDisplay();
});

btnreset.addEventListener('click', function () {
    numeroAtual = 0;
    atualizarDisplay();
});