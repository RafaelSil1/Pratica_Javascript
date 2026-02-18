function gerarCatalago() {

    const idade = document.getElementById("inputIdade").value;

    const listaContainer = document.getElementById("listaFilmes");
    
    // Nossa "Base de Dados" de filmes

    const filmes = [ // Arrays []: Você criou uma lista de objetos.

        {nome: "Toy Story", clasificacao: 0 }, // Objetos {}: Você agrupou o nome e a classificacao de cada filme em um único lugar.
        {nome: "Procurando o nemo", clasificacao: 0 },
        {nome: "Zootopia", clasificacao: 0 },
        {nome: "Harry Potter", clasificacao: 12 },
        {nome: "Vingadores", clasificacao: 12 },
        {nome: "Deadpool", clasificacao: 18 },
        {nome: "Coringa", clasificacao: 18 },
        {nome: "A Empregada", clasificacao: 18 },
    ];
    // Limpamos a lista antes de mostrar a nova
    listaContainer.innerHTML = "";

    filmes.forEach(filmes =>{ // forEach(): Você disse ao computador: "Para cada item nessa lista, execute este bloco de código".

        // A LÓGICA: Se a idade for maior ou igual à classificação do filme...
        if (idade >= filmes.clasificacao) {

            // ${} para misturar texto HTML com variáveis JS.
            // CRIAMOS O HTML VIA JS (isso é poderoso!)
            listaContainer.innerHTML += ` 
            <div class="card-filme">
            <h3>${filmes.nome}</h3>
            <span>Classificação: ${filmes.clasificacao}</span>
            </div>
            `;
        }
    });
}