function verificarFilme() {
     
    const idade = document.getElementById("inputIdade").value; //Pega o que está escrito dentro da caixa de texto.

    const display = document.getElementById("resultado");

    if (idade === "") {
        display.innerText = "Por favor Digite Sua Idade"; // innerText Altera o texto que está aparecendo na tela.
    } else if (idade >= 18){
        display.innerText = " 🎬 Filmes Maiores de Idade Liberado!";
        display.classList = ("vibe-terror");
    } else if (idade >= 14){
        display.innerText = " 🍿 Filme De Até 14 Anos Idade liberados";
        display.classList = ("vibe-teen");
    } else {
        display.innerText = " 🧸 Filmes Infantils";
        display.classList = ("vibe-kids"); // classList que adiciona uma nova class
    }
}