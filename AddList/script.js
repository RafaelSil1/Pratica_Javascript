const input = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("btnAdicionar");
const botaoRemover = document.querySelector(".btn-remover");

botaoAdicionar.addEventListener('click', () => {

    const divOne = document.createElement("div");
    let textoDigitado = input.value;
    
    const classe = document.querySelector(".tarefas");
    classe.appendChild(divOne);

    divOne.classList.add("tarefa");

    const divTwo = document.createElement("div");
    divTwo.classList.add("tarefa-conteudo");
    divOne.appendeChild(divTwo);

    const divThree = document.createElement("div");
    divThree.classList.add("check");
    divTwo.appendChild(divThree);

    const dispan = document.createElement("span");
    dispan.innerText = textoDigitado;
    divTwo.appendChild(dispan)

    const btnClose = document.createElement("button");
    btnClose.classList.add("btn-remover")
    btnClose.innerText = "x";

    divOne.appendChild(btnClose);

    input.value = "";

});