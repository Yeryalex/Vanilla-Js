const timer = document.querySelector(".timer");
const start = document.querySelector(".start");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);
  start.disabled = true;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  timer.innerText =
    `${hours < 10 ? "0" : ""}${hours}:` +
    `${minutes < 10 ? "0" : ""}${minutes}:` +
    `${seconds < 10 ? "0" : ""}${seconds}:` +
    `${milliseconds < 10 ? "0" : ""}${milliseconds}`;
}

start.addEventListener("click", startTimer);
