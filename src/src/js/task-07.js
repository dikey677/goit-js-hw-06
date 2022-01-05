let input = document.querySelector("input#font-size-control");
console.log(input);
let text = document.querySelector("span#text");
console.log(text);

input.addEventListener("input", (event) => {
  let inputChanges = event.currentTarget.value;
  //   console.log(inputChanges);

  //   console.log(Number(inputChanges));

  text.style.fontSize = `${Number(inputChanges)}px`;
});
