const poundsInput = document.querySelector("#input");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  showResult();
});

function parseInput(poundsInput) {
  if (nonNumeric(poundsInput)) {
    return null;
  }
  let pounds = parseFloat(poundsInput);
  let Kg = (pounds * 0.453592).toFixed(2);
  return Kg;
}

function showResult() {
  let valueKg = parseInput(poundsInput.value);
  if (valueKg === null) {
    result.innerHTML = `<p>Pounds must be numeric. Please, insert a correct value</p>`;
    return 0;
  }
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
