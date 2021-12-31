let value = Number(document.querySelector("#value").textContent);
let counterValue = document.querySelector("#value");

console.log(counterValue);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

console.log(decrementBtn);

decrementBtn.addEventListener("click", () => {
  console.log("Button was clicked decrement");
  value -= 1;
  counterValue.innerHTML = value;
});

incrementBtn.addEventListener("click", () => {
  console.log("Button was clicked increment");
  value += 1;
  counterValue.innerHTML = value;
});

// Если data action минус - убавляй единицу со счетчика
// Если data action плюс - добавляй единицу со счетчика
// Значеине counterValue перезаписывай в счетчике
