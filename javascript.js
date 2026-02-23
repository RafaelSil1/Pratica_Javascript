// 1. Pegando as referências do HTML (Corrigido o 'Id')
const visorSuperior = document.getElementById("previous-operand");
const visorPrincipal = document.getElementById("current-operand");

let valorAnterior = "";
let operacaoAtual = null;

// Função principal disparada pelos botões
function clicouNoBotao(valor) {
    
    // Se for um operador (+, -, x, /)
    if (["+", "-", "x", "/"].includes(valor)) {
        escolherOperacao(valor);
    } 
    // Se for o botão de igual
    else if (valor === "=") {
        calcular();
    } 
    // Se for o ponto decimal
    else if (valor === ".") {
        adicionarPonto();
    }
    // Se for um número
    else {
        adicionarNumero(valor);
    }
}

// --- FUNÇÕES DE APOIO ---

function adicionarNumero(numero) {
    // Se o visor só tem "0", a gente substitui pelo número. Se não, concatena.
    if (visorPrincipal.innerText === "0") {
        visorPrincipal.innerText = numero;
    } else {
        visorPrincipal.innerText += numero;
    }
}

function adicionarPonto() {
    // Só adiciona o ponto se ainda não houver um no visor
    if (!visorPrincipal.innerText.includes(".")) {
        visorPrincipal.innerText += ".";
    }
}

function escolherOperacao(operador) {
    if (visorPrincipal.innerText === "") return;
    
    // Se já havia algo sendo calculado, resolve antes de mudar o operador
    if (valorAnterior !== "") {
        calcular();
    }

    operacaoAtual = operador;
    valorAnterior = visorPrincipal.innerText;
    visorSuperior.innerText = `${valorAnterior} ${operador}`;
    visorPrincipal.innerText = "0";
}

function calcular() {
    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(visorPrincipal.innerText);

    if (isNaN(anterior) || isNaN(atual)) return;

    switch (operacaoAtual) {
        case "+": resultado = anterior + atual; break;
        case "-": resultado = anterior - atual; break;
        case "x": resultado = anterior * atual; break;
        case "/": 
            resultado = atual === 0 ? "Erro" : anterior / atual; 
            break;
        default: return;
    }

    visorPrincipal.innerText = resultado;
    visorSuperior.innerText = "";
    valorAnterior = "";
    operacaoAtual = null;
}

// Função para o botão AC (Adicione onclick="limpar()" no seu HTML)
function limpar() {
    visorPrincipal.innerText = "0";
    visorSuperior.innerText = "";
    valorAnterior = "";
    operacaoAtual = null;
}