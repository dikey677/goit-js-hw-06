const allCategories = document.querySelector("ul#categories");
const listElem = allCategories.children;
console.log(`Number of categories: ${listElem.length}`);

for (let i = 0; i < listElem.length; i += 1) {
  const childLi = listElem[i].children;
  const nameContent = childLi[0].textContent;
  console.log(`Category: ${nameContent}`);
  const elemCount = childLi[1].children.length;
  console.log(`Elements: ${elemCount}`);
}
