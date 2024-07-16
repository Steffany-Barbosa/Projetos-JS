const colorsDiv = document.querySelector(".colors"); //elemento pai
const generateButton = document.querySelector("#generate-button");

//Gerando as cores, junto com o css
function generateColors() {
  colorsDiv.innerHTML = " ";
  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    const colorName = document.createElement("p");
    colorName.textContent = color;
    colorName.style.color = color;
    colorDiv.appendChild(colorName);
    colorsDiv.appendChild(colorDiv);
  }
}

//function p/ gerar as cores aleatoriamente
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateButton.addEventListener("click", generateColors);
