function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector(".color")
const buttonEl = document.querySelector(".change-color")
const bodyEl = document.querySelector("body")


const changeColor = () => { 
  let newBackgroundColor = getRandomHexColor();
  spanEl.textContent = newBackgroundColor;
  bodyEl.style.backgroundColor = newBackgroundColor;
}

buttonEl.addEventListener("click", changeColor);