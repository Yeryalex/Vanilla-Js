const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7dc3f2e9e2mshc040d92a56c000cp10f713jsn1f0d9cd8e53f",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

const container = document.querySelector(".container");
const recipe = document.querySelector(".recipe");
const title = document.querySelector("h2");
const img = document.querySelector("img");
const ingredients = document.querySelector(".ingredients");
const button = document.querySelector(".button");

function displayRecipe(recipes) {
  console.log(recipes);
}
async function production() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

async function manageRecipe() {
  const recipes = await production();
  displayRecipe(recipes);
}

manageRecipe();

