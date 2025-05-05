var painel = "";
var calculo = { espera: "", resultado: "", operacao: "" };

const numberButtons = document.querySelectorAll(".button-number");

numberButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const tecla = event.target.textContent;
    painel += tecla;
    document.getElementById("painel-calculo").textContent = painel;
  });
});

const operationButtons = document.querySelectorAll(".button-operator");

operationButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const tecla = event.target.textContent;
    calculo.operacao = tecla;
    console.log(calculo.operacao);
  });
});
