const display = document.getElementById("numero");
const btnmais = document.getElementById("mais");
const btnmenos = document.getElementById("menos");

let indiceAtual = 0;

btnmais.addEventListener('click', () => {
    indiceAtual++;
    display.innerText = indiceAtual;
});

btnmenos.addEventListener('click', () => {
    if (indiceAtual > 0){
        indiceAtual--;
    }
    display.innerText = indiceAtual;
});

display.innerText = 0;