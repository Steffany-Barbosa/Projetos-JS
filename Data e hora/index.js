/* CRIANDO NOSSA FUNÇÃO MÁGICA */
function atualizaHora() {
  // Variáveis para trabalhar com a data do sistema
  var agora = new Date();

  // Manipuladores do DOM
  var corpo = document.getElementsByTagName("body")[0]; // para alterar o tema do site
  var relogio = document.querySelector(".relogio>p"); // para exibir o relógio
  var calendario = document.querySelector(".calendario>p"); // para exibir a data atual

  // Configuração de exibição da data e hora
  var configLocal = "pt-BR"; // Configuração do local
  var configDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Exibe o relógio com a hora atual do sistema
  relogio.innerText = agora.toLocaleTimeString(configLocal);

  // Exibe o calendário formatado
  calendario.innerText = agora.toLocaleDateString(configLocal, configDate);
}

// Função para alternar entre temas claro e escuro
function alternarTema() {
  var corpo = document.getElementsByTagName("body")[0];
  corpo.classList.toggle("claro");
  corpo.classList.toggle("escuro");
}

// Chama a função no momento que a página é carregada
atualizaHora();

// Segue atualizando a hora chamando a função a cada segundo
setInterval(atualizaHora, 1000);
