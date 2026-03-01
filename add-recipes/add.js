const save = document.getElementById("save");
const title = document.getElementById("name").value.trim();
const ingredients = document.getElementById("ingredients").value.trim();
const instructions = document.getElementById("instructions").value.trim();
const recipe = {
  title: title,
  ingredients: ingredients,
  instructions: instructions,
};
