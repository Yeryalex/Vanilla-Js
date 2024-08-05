const poundsInput = document.querySelector("#input");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  parseInput(poundsInput);
});

function parseInput(poundsInput) {
  let pounds = parseFloat(poundsInput.value);
  let Kg = (pounds * 0.453592).toFixed(2);
  result.innerHTML = `<p>Your weight in Kg is: ${Kg}</p>`;
}
