const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
const button = document.querySelector("button");

button.addEventListener("click", calculate);

function calculate() {
  const billAmount = bill.value.trim();
  const tipPercentage = tip.value.trim();
  if (!billAmount || !tipPercentage) {
    billAmount = 0;
    tipPercentage = 0;
  }
  if (billAmount < 0 || tipPercentage < 0) {
    error.innerText = "Please, insert only positives values.";
  } else {
    const billAmount = parseFloat(bill.value);
    const tipPercentage = parseFloat(tip.value);
    const totalTip = billAmount * (tipPercentage / 100) + billAmount;
    total.innerText = totalTip.toFixed(2);
  }
}
