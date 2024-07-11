const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
const button = document.querySelector("button");

button.addEventListener("click", calculate);

function calculate() {
  let billAmount = bill.value;
  let tipPercentage = tip.value;

  if (billAmount < 0 || tipPercentage < 0) {
    total.classList.add("hide");
    error.classList.remove("hide");
    error.innerText = "Please, insert only positives values.";
  } else {
    error.classList.add("hide");
    total.classList.remove("hide");

    billAmount = bill.value;
    tipPercentage = tip.value;
    let totalTip = billAmount * (1 + tipPercentage / 100);
    total.innerText = totalTip.toFixed(2);
  }
}
