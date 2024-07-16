const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const errorMessage = document.querySelectorAll(".error-message"); // seleção de todos os erros

//Criar um evento, p/ disparar o submit do botão
form.addEventListener("submit", (event) => {
  event.preventDefault();

  resetErrors();
  validateInputs();
});

//function mensagem de erro
function setError(input, errorMessage) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  input.parentElement.classList.add("error");
}

//function p/ limpar os erros, resetar
function resetErrors() {
  errorMessage.forEach((msg) => {
    msg.textContent = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

//functio p/ validar os inputs
function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue === "") {
    //erro
    setError(nome, "Não pode ficar em branco.");
  }

  if (emailValue === "") {
    setError(email, "Não pode ficar em branco.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }

  if (assuntoValue === "") {
    //erro
    setError(assunto, "Não pode ficar em branco.");
  }
  if (mensagemValue === "") {
    //erro
    setError(mensagem, "Não pode ficar em branco.");
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
