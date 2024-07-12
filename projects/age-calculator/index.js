const birth = document.getElementById("age");
const calculate = document.querySelector(".button");
const resultAge = document.querySelector(".result");

calculate.addEventListener("click", calculateAge);

function calculateAge() {
  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birth.value).getFullYear();
  const month = new Date().getMonth() - new Date(birth.value).getMonth();
  let yearComplete = 0;

  month < 0 || (month == 0 && currentYear.getDate() < birthYear.getDate())
    ? (yearComplete = -1)
    : (yearComplete = yearComplete);

  !birthYear
    ? (resultAge.innerText = `Please, Add a date of birth`)
    : (resultAge.innerText = `Your age is ${
        currentYear - birthYear + yearComplete
      } years old`);
}
