const owned = document.getElementById("owned");
const recipes = owned.children;
const add = document.getElementById("add");

add.addEventListener("click", () => {
  window.location.href = "add-recipes/add.html";
});

if (recipes.length === 0) {
  owned.textContent = "You don't have any recipes yet.";
} else {
  owned.textContent = "You have " + recipes.length + " recipes.";
}
