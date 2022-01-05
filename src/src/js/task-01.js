// const allCategories = document.querySelector("ul#categories");
// const listElem = allCategories.children;
// console.log(`Number of categories: ${listElem.length}`);

// for (let i = 0; i < listElem.length; i += 1) {
//   const childLi = listElem[i].children;
//   const nameContent = childLi[0].textContent;
//   console.log(`Category: ${nameContent}`);
//   const elemCount = childLi[1].children.length;
//   console.log(`Elements: ${elemCount}`);
// }
const dataArray = {
  allCategories: document.querySelector("ul#categories"),
  listItems: document.querySelectorAll("li.item"),
  titles: document.querySelectorAll("li.item h2"),
  nestedList: document.querySelectorAll("li.item ul"),
};

console.log(`Number of categories: ${dataArray.listItems.length}`);
// console.log(dataArray.titles);
// console.log(dataArray.nestedList);

dataArray.listItems.forEach((item) => {
  const nameTitle = item.children[0].textContent;
  const totalLengthList = item.children[1].children.length;
  console.log(`Category: ${nameTitle}`);
  console.log(`Elements: ${totalLengthList}`);
});
