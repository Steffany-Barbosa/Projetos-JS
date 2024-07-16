function updateClock() {
  // Usa-se .clock, e não #clock por estar dentro de uma class
  const clockElement = document.querySelector(".clock");
  const hoursElement = document.querySelector(".hours");
  const minutesElement = document.querySelector(".minutes");
  const secondsElement = document.querySelector(".seconds");

  //Acessando a data local, pra obter a hr atualizada.
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0"); //  Hora pra nunca ficar com um digito só
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Minuto pra nunca ficar com um digito só
  const seconds = now.getSeconds().toString().padStart(2, "0"); // Segundos pra nunca ficar com um digito só

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  console.log(now, hours);
}

updateClock();

setInterval(updateClock, 1000); // Atualização da hora, minutos e secundos automaticamente.
