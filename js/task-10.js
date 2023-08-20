function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const inputElement = document.querySelector("input");
const divElement = document.querySelector("#boxes");


inputElement.addEventListener("input", getAmount);
btnCreate.addEventListener("click", createBtn);
btnDestroy.addEventListener("click", destroyBtn);

function getAmount(event) {
  btnCreate.value = event.currentTarget.value;
}

function createBtn() {
  createBoxes(btnCreate.value);
}

function destroyBtn() {
  divElement.innerHTML = "";
  inputElement.value = "";
}

function createBoxes(amount) {
  let array = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const newElem = document.createElement("div");
    newElem.style.backgroundColor = getRandomHexColor();
    newElem.style.width = `${boxSize}px`;
    newElem.style.height = `${boxSize}px`;
    boxSize += 10;
    array.push(newElem);
  }
  divElement.prepend(...array);
}

//не моє нажаль :( , але хоча б подивився як можуть інші люди