var painel = "";
var calculo = { espera: "", operacao: "" };

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

    calculo.espera = painel || "0";
    calculo.operacao = tecla;
    painel = "";

    document.getElementById(
      "painel-espera"
    ).textContent = `${calculo.espera} ${calculo.operacao}`;

    document.getElementById("painel-calculo").textContent = "0";
  });
});

const resultButton = document.getElementById("button-result-calculator");

resultButton.addEventListener("click", function () {
  painel = calculaResultado(calculo.espera, painel, calculo.operacao);

  calculo.espera = "";
  calculo.operacao = "";

  document.getElementById("painel-espera").textContent = "";
  document.getElementById("painel-calculo").textContent = painel;
});

function calculaResultado(espera, valor, operacao) {
  var resultado = 0;

  switch (operacao) {
    case "x":
      resultado = parseFloat(espera) * parseFloat(valor);
      break;
    case "-":
      resultado = parseFloat(espera) - parseFloat(valor);
      break;
    case "+":
      resultado = parseFloat(espera) + parseFloat(valor);
      break;
  }

  return resultado;
}

const resetButton = document.getElementById("button-reset");

resetButton.addEventListener("click", function () {
  calculo.espera = "";
  calculo.operacao = "";
  painel = "";
  document.getElementById("painel-espera").textContent = "";
  document.getElementById("painel-calculo").textContent = "0";
});
