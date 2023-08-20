const textInputElement = document.querySelector("#validation-input");


textInputElement.addEventListener("input", () => {
     if (textInputElement.getAttribute('data-length') < textInputElement.value.length) {
    textInputElement.classList.add("valid");
    textInputElement.classList.remove("invalid");
  } else {
    textInputElement.classList.remove("valid");
    textInputElement.classList.add("invalid");
  }
});
