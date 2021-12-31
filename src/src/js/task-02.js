const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const ul = document.querySelector("#ingredients");
  const li = document.createElement("li");
  // ===============================================
  li.classList.add("item");
  ul.appendChild(li);
  li.textContent = ingredient;
  console.log(ul);
}
