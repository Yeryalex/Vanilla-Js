const counter = document.querySelector(".counter");
const loading = document.querySelector("h1");
const loadingFront = document.querySelector(".loading-front");

let i = 0;
let interval = setInterval(counterValue, 20);

function counterValue() {
  i++;
  if (i == 100) clearInterval(interval);
  counter.innerText = `${i}%`;
  loadingFront.style.width = `${i}%`;
}
