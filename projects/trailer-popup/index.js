const button = document.querySelector(".button");
const icon = document.querySelector(".close-icon");
const trailer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

button.addEventListener("click", showScreen);
icon.addEventListener("click", hideScreen);

function showScreen() {
  trailer.classList.remove("active");
}

function hideScreen() {
  trailer.classList.add("active");
  video.pause();
  video.currentTime = 0;
}
