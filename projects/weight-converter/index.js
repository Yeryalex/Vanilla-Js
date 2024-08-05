const poundsInput = document.querySelector("#input");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  showResult();
});

function parseInput(poundsInput) {
  if (nonNumeric(poundsInput)) {
    result.innerHTML = `<p>Wrong value</p>`;
    return 0;
  }
  let pounds = parseFloat(poundsInput.value);
  let Kg = (pounds * 0.453592).toFixed(2);
  return Kg;
}

function showResult() {
  let valueKg = parseInput(poundsInput);
  result.innerHTML = `<p>Your weight in Kg is: ${valueKg}</p>`;
}

function nonNumeric(poundsInput) {
  for (let i = 0; i < poundsInput.length; i++) {
    if (poundsInput.charCodeAt(i) < 48 || poundsInput.charCodeAt(i) > 57) {
      return true;
    }
  }
  return false;
}
