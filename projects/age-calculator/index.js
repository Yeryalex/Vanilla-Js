const birth = document.getElementById("age");
const calculate = document.querySelector(".button");
const resultAge = document.querySelector(".result");

calculate.addEventListener("click", calculateAge);

function calculateAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birth.value).getFullYear();
  resultAge.innerText = `Your age is ${currentYear - birthYear} years old`;
}
