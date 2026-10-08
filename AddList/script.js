// Seleciona o campo de texto (input) onde o usuário digita a nova tarefa
const input = document.getElementById("tarefa");

// Seleciona o botão de adicionar tarefa na página
const botaoAdicionar = document.getElementById("btnAdicionar");

// Seleciona o container principal que guarda todas as tarefas da lista
const containerTarefas = document.querySelector(".tarefas");

// Adiciona um ouvinte de cliques no botão de adicionar
botaoAdicionar.addEventListener('click', () => {

    // Se o input estiver vazio (ou apenas com espaços), interrompe a execução aqui
    if (input.value.trim() === "") {
        return;
    }

    // Cria uma nova tag <div> na memória para ser o container da nova tarefa
    const divOne = document.createElement("div");

    // Guarda na variável o texto que o usuário digitou no input
    let textoDigitado = input.value;

    // Busca o container das tarefas novamente (nota: esta linha é redundante com a const containerTarefas)
    const classe = document.querySelector(".tarefas");

    // Adiciona a div criada dentro da lista de tarefas usando a variável 'classe'
    classe.appendChild(divOne);

    // Tenta adicionar a mesma div de novo no containerTarefas (nota: como já foi adicionada acima, aqui ela apenas muda de lugar)
    containerTarefas.appendChild(divOne);

    // Adiciona a classe CSS "tarefa" na div principal da nova tarefa
    divOne.classList.add("tarefa");

    // Cria uma div interna para organizar o conteúdo interno (check e texto)
    const divTwo = document.createElement("div");

    // Adiciona a classe CSS "tarefa-conteudo" nessa div interna
    divTwo.classList.add("tarefa-conteudo");

    // Coloca a div de conteúdo dentro da div principal da tarefa (divOne)
    divOne.appendChild(divTwo);

    // Cria uma div que funcionará como o ícone de marcação (check)
    const divThree = document.createElement("div");

    // Adiciona a classe CSS "check" nessa div
    divThree.classList.add("check");

    // Coloca a div do check dentro da div de conteúdo
    divTwo.appendChild(divThree);

    // Cria um elemento <span> para exibir o texto da tarefa
    const dispan = document.createElement("span");

    // Define o texto de dentro do span como o texto que o usuário digitou
    dispan.innerText = textoDigitado;

    // Coloca o span (com o texto) dentro da div de conteúdo
    divTwo.appendChild(dispan);

    // Cria um elemento <button> que funcionará como o botão de fechar/remover ("x")
    const btnClose = document.createElement("button");

    // Adiciona a classe CSS "btn-remover" nesse botão
    btnClose.classList.add("btn-remover");

    // Define o texto visível do botão como "x"
    btnClose.innerText = "x";

    // Coloca o botão de remover dentro da div principal da tarefa (divOne)
    divOne.appendChild(btnClose);

    // Limpa o campo de input, deixando-o em branco para a próxima digitação
    input.value = "";

    // Adiciona um evento de clique específico para este botão de remover criado dinamicamente
    btnClose.addEventListener('click', () => {
        // Remove a div da tarefa correspondente ao clicar neste botão "x"
        divOne.remove();
    });
});

// Adiciona um ouvinte de cliques em toda a lista de tarefas (Delegação de Eventos)
containerTarefas.addEventListener('click', (event) => {

    // Verifica se o elemento que sofreu o clique possui a classe "btn-remover"
    if (event.target.classList.contains('btn-remover')) {

        // Procura o elemento ancestral mais próximo que possui a classe ".tarefa"
        const tarefaParaRemover = event.target.closest('.tarefa');

        // Se encontrar a tarefa correspondente, remove-a da página (serve para as tarefas que já vinham no HTML)
        if (tarefaParaRemover) {
            tarefaParaRemover.remove();
        }
    }

    // 2. SE CLICAR NO CHECK OU NA CONTEÚDO (Para marcar/desmarcar como concluída)
    if (event.target.classList.contains('check') || event.target.classList.contains('tarefa-conteudo') || event.target.tagName === 'SPAN') {
        const tarefaParaMarcar = event.target.closest('.tarefa');
        if (tarefaParaMarcar) {
            // .toggle() adiciona a classe se ela não existir, ou remove se ela já existir
            tarefaParaMarcar.classList.toggle('concluida');
        }
    }
});