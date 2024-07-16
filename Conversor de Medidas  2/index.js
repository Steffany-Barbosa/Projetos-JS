// selecionando os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const convertButton = document.querySelector("#convert-btn");
const outputElement = document.querySelector("#output");
const messageElement = document.querySelector("#message");

//função pra converter a unidades
function convert() {
  //obter o valores das unidades de entrada e saída
  const fromValue = fromElement.value;
  const toValue = toElement.value;
  //verificar se as unidades de entrada e saida são iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
    // se as unidades de saida são iguais, ñ precisa retornar mensagem, e nem converter.
  }

  //converter a entrada para metros.
  let liters;
  switch (fromValue) {
    case "l":
      liters = inputElement.value;
      break;
    case "ml":
      liters = inputElement.value / 1000;
      break;
    case "gal":
      liters = inputElement.value * 3.78541;
      break;
  }

  //converter metros p/ unidade de saida
  let result;
  switch (toValue) {
    case "l":
      result = liters;
      break;
    case "ml":
      result = liters * 1000;
      break;
    case "gal":
      result = liters / 3.78541;
      break;
  }
  // exibindo resultado na caixa de saída
  outputElement.value = result;

  //exibir mensagem de conversão (mensagemzinha verde)
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = fromElement.options[toElement.selectedIndex].text;
  const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
  messageElement.textContent = message;
  return;
}

//Evento de click com botão
convertButton.addEventListener("click", convert);
