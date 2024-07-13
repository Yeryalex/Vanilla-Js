const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  start.disabled = true;
  pause.disabled = false;
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

function pauseTimer() {
  clearInterval(timerInterval);
  start.disabled = false;
  pause.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timer.innerText = "00:00:00:00";
  start.disabled = false;
  pause.disabled = false;
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
