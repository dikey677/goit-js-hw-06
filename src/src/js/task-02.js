const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

// Метод массивов map
const nestedList = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;

  return li;
});

console.log(nestedList);
ul.append(...nestedList);

// Метод массивов forEach
// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.classList.add("item");
//   li.textContent = ingredient;
//   console.log(ingredient);
//   ul.append(li);
// });

// Старый метод через цикл for
// for (const ingredient of ingredients) {
//   const li = document.createElement("li");
//   // ===============================================
//   li.classList.add("item");
//   ul.appendChild(li);
//   li.textContent = ingredient;
//   console.log(ul);
// }
