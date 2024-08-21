const poundsInput = document.querySelector("#input");
const calculate = document.querySelector(".calculate");
const result = document.querySelector(".result");

calculate.addEventListener("click", () => {
  showResult();
});

poundsInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    showResult();
  }
});

function parseInput(poundsInput) {
  if (poundsInput === "") {
    return -1;
  } else if (nonNumeric(poundsInput)) {
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
  } else if (valueKg == -1) {
    result.innerHTML = `<p>Please, insert a value</p>`;
    return 0;
  }
  result.innerHTML = `<p>Your weight in Kg is: ${valueKg}</p>`;
}

function nonNumeric(input) {
  return isNaN(input) || input.trim() === "";
}
