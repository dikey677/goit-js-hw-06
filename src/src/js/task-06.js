let textInput = document.querySelector("input#validation-input");
let textLength = textInput.dataset.length;
let input = document.querySelector("input");
console.log(textLength);
textInput.addEventListener("focus", () => {
  console.log(`is focused`);
});

textInput.addEventListener("blur", () => {
  console.log(`is blured`);
});

textInput.addEventListener("change", (event) => {
  textInput = event.currentTarget.value;
  console.log(textInput);

  if (textInput.length !== textLength) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
