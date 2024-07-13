const timer = document.querySelector(".timer");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

const myAudio = new Audio("./myalarm.mp3");

let timeleft = 1499;
let stopInterval;

function startTimer() {
  start.disabled = true;
  stopInterval = setInterval(secondsTimer, 1000);
}

function secondsTimer() {
  let minutes = Math.floor(timeleft / 60);
  let seconds = Math.floor(timeleft % 60);
  timer.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  if (timeleft == 0) {
    startAlarm();
    clearInterval(stopInterval);
  }
  timeleft--;
}
function resetTimer() {
  start.disabled = false;
  clearInterval(stopInterval);
  myAudio.pause();
  timeleft = 1500;
  secondsTimer();
}

function startAlarm() {
  myAudio.loop = true;
  myAudio.play();
}

start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);
