const container = document.querySelector(".container");
const generate = document.querySelector(".generate");

function hexadecimalColors() {
  let colorHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  let color = [];
  for (let i = 0; i <= 5; i++) {
    color.push(colorHex[Math.trunc(Math.random() * 16)]);
  }
  return color.join("");
}

function displayColor() {
  container.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    let color = hexadecimalColors();
    const div = document.createElement("div");
    div.classList.add("color-background");
    div.innerText = `#${color}`;
    container.appendChild(div);
    div.style.backgroundColor = `#${color}`;
  }
}
generate.addEventListener("click", displayColor);
