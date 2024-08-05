const poundsInput = document.querySelector("#input");
const calculate = document.querySelector(".calculate");

calculate.addEventListener("click", () => {
  parseInput(poundsInput);
});

function parseInput(poundsInput) {
  let value = parseFloat(poundsInput.value);
  return value;
}
