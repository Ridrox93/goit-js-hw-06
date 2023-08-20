const textInputElement = document.querySelector("#name-input");
const nameSpanElement = document.querySelector("#name-output");

textInputElement.addEventListener("input", () => {
     if (textInputElement.value) {
    nameSpanElement.textContent = textInputElement.value;
  } else {
    nameSpanElement.textContent = "Anonymous";
  }
});