const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Решение через map
const ul = document.querySelector("ul.gallery");

const source = images.map((image) => {
  const string = `<li><img src = ${image.url} alt = '${image.alt}' width="450" heigth="250"></li>`;

  return string;
});

const addImage = source.join("");
console.log(addImage);

ul.insertAdjacentHTML("afterbegin", addImage);
ul.style.display = "flex";
ul.style.flexDirection = "row";
console.log(ul);

//========================================================

// Другое оформление через map
// const addImage = images.map((image) => {
//   ul.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src=${image.url} alt='${image.alt}' width="450" heigth="250"></li>`
//   );
//   return ul;
// });

// console.log(addImage);

// ul.style.display = "flex";
// ul.style.flexDirection = "row-reverse";
// console.log(ul);

//========================================================

//forEach
// images.forEach((image) => {
//   ul.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src="${image.url}" alt="${image.alt}" width="350" height="250"></img></li>`
//   );
//   console.log(ul);

//   ul.style.display = "flex";
//   ul.style.flexDirection = "row";
// });
