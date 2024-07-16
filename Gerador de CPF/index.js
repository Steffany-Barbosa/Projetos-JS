const cpfEl = document.querySelector("#cpf");
const cpfGrBtn = document.querySelector("#gerar-cpf");
const cpfCopyBtn = document.querySelector("#copiar-cpf");

//function p/ gerar o cpf aleatoriamente.
function gerarCPF() {
  let n = Math.floor(Math.random() * 999999999) + 1;
  let nStr = n.toString().padStart(9, "0");
  let dv1 = calcularDV(nStr, 10); //digito verificador 1
  let dv2 = calcularDV(nStr + dv1, 11); // digito verificador 2

  cpfEl.innerText = formatarCPF(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
  let total = 0;
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--;
  }
  let resto = total % 11;
  return resto < 2 ? 0 : 11 - resto;
}

//function p/ formatar o cpf
//Regex - identificar as 4 partes do cpf
function formatarCPF(cpf) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(regex, "$1.$2.$3-$4"); // 000.000.000-00
}

//copiar cpf
function copiarCPF() {
  const cpf = cpfEl.innerText;
  navigator.clipboard.writeText(cpf).then(
    () => {
      alert(`CPF ${cpf} copiado para área de trânsferência.`);
    },
    (err) => {
      console.log("Erro ao copiar CPF.");
    }
  );
}

cpfGrBtn.addEventListener("click", gerarCPF);
cpfCopyBtn.addEventListener("click", copiarCPF);
