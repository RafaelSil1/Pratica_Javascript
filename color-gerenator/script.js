let corHex = document.getElementById("colorDisplay");
let codeHex = document.getElementById("hexCode");
let btnGenerate = document.getElementById("generateBtn");
let btnCopy = document.getElementById("copyBtn");
let msgCopy = document.getElementById("copyFeedback");

const caracteres = "0123456789ABCDEF";

btnGenerate.addEventListener('click', function(){
    
    let simbolo = "#";

    for(let i = 0; i < 6; i++){
        
        corAleatoria = Math.floor(Math.random() * caracteres.length)
        simbolo += caracteres[corAleatoria];
        corHex.style.backgroundColor = simbolo;
    };
    codeHex.textContent = simbolo;
    
});

btnCopy.addEventListener('click', async function(){
    let textoCopiado = corHex.textContent;

        await navigator.clipboard.writeText(textoCopiado);

        msgCopy.style.opacity = "1";
        setTimeout(function() {
            msgCopy.style.opacity = "0";
        }, 2000);

});