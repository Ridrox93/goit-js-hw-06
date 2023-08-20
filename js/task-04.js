let counterValue = 0; 
const divEl = document.querySelector("#counter");
const decrementButtonEl = divEl.firstElementChild;
const incrementButtonEl = divEl.lastElementChild;
let valueEl = document.querySelector("#value")

// console.log(decrementButtonEl);

decrementButtonEl.addEventListener("click", () => { counterValue -= 1; valueEl.textContent = counterValue;}); 
incrementButtonEl.addEventListener("click", () => { counterValue += 1;valueEl.textContent = counterValue; }); 

