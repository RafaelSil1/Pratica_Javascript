// Seleciona o campo de texto (input) onde o usuário digita a nova tarefa
const input = document.getElementById("tarefa");

// Seleciona o botão de adicionar tarefa na página
const botaoAdicionar = document.getElementById("btnAdicionar");

// Seleciona o container principal que guarda todas as tarefas da lista
const containerTarefas = document.querySelector(".tarefas");

let atualizarTarefas = document.getElementById("task");

let clear = document.getElementById("limpar");

let indiceAtual = 3; // Ajuste inicial conforme seu HTML (se tiver 3 tarefas iniciais)

// Função auxiliar para atualizar o texto do contador corretamente
function atualizarContador() {
    atualizarTarefas.innerText = `${indiceAtual} Tarefa${indiceAtual === 1 ? '' : 's'}`;
}

// Adiciona um ouvinte de cliques no botão de adicionar
botaoAdicionar.addEventListener('click', () => {
    if (input.value.trim() === "") {
        return;
    }

    let textoDigitado = input.value;

    const divOne = document.createElement("div");
    divOne.classList.add("tarefa");

    const divTwo = document.createElement("div");
    divTwo.classList.add("tarefa-conteudo");
    divOne.appendChild(divTwo);

    const divThree = document.createElement("div");
    divThree.classList.add("check");
    divTwo.appendChild(divThree);

    const dispan = document.createElement("span");
    dispan.innerText = textoDigitado;
    divTwo.appendChild(dispan);

    const btnClose = document.createElement("button");
    btnClose.classList.add("btn-remover");
    btnClose.innerText = "x";
    divOne.appendChild(btnClose);
    
    // Adiciona a div pronta dentro do container
    containerTarefas.appendChild(divOne);
    
    input.value = "";

    indiceAtual++;
    atualizarContador();

    // REMOVIDO o addEventListener duplicado daqui de dentro! 
    // A delegação de eventos global lá embaixo já cuida disso com perfeição.
});

// Adiciona um ouvinte de cliques em toda a lista de tarefas (Delegação de Eventos)
containerTarefas.addEventListener('click', (event) => {
    // 1. SE CLICAR NO BOTÃO DE REMOVER ("x")
    if (event.target.classList.contains('btn-remover')) {
        const tarefaParaRemover = event.target.closest('.tarefa');
        if (tarefaParaRemover) {
            tarefaParaRemover.remove();
            indiceAtual--;
            atualizarContador();
        }
    }
    
    // 2. SE CLICAR NO CHECK OU NA CONTEÚDO (Para marcar/desmarcar como concluída)
    if (event.target.classList.contains('check') || event.target.classList.contains('tarefa-conteudo') || event.target.tagName === 'SPAN') {
        const tarefaParaMarcar = event.target.closest('.tarefa');
        if (tarefaParaMarcar) {
            tarefaParaMarcar.classList.toggle('concluida');
        }
    }
});

// Botão Limpar corrigido (esvazia o HTML sem destruir o container)
clear.addEventListener('click', function () {
    containerTarefas.innerHTML = ""; // Limpa apenas os filhos, mantendo o container vivo na tela
    indiceAtual = 0;
    atualizarContador();
});