const inputValor = document.getElementById("valor-dolar");
const btnConverter = document.getElementById("btn-converter");
const resultado = document.getElementById("resultado");

let cotacaoDolar = 5.05;

btnConverter.addEventListener('click', function(){
    let inputDolar = Number(inputValor.value);
    let valorFinal = inputDolar * cotacaoDolar;

    if (inputDolar <= 0 || isNaN(inputDolar)){

        resultado.textContent = "Por favor coloque um numero valido!";
        resultado.style.color = "red";

    } else {
        resultado.textContent = valorFinal;
        resultado.style.color = "";
    }
});
