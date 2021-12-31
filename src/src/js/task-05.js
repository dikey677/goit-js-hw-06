let textInput = document.querySelector("input#name-input");
let textOutput = document.querySelector("h1 span#name-output");

textInput.addEventListener("input", (event) => {
  textInput = event.currentTarget.value;
  console.log(textInput);

  if (textInput.length !== 0) {
    textOutput.textContent = textInput;
  } else {
    textOutput.textContent = "Anonymous";
  }
});
