function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".widget .change-color");
// console.log(button);
const bgColorName = document.querySelector(".widget p .color");
// console.log(bgColor);
const body = document.querySelector("body");

button.addEventListener("click", () => {
  bgColorName.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
