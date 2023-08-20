// Завдання 7

// const inputEl = document.getElementById("#font-size-control");
// const spanEl = document.getElementById("#text");
// inputEl.addEventListener("input", handleInputRange);
// function handleInputRange(event) {
//   spanEl.style.fontSize = event.currentTarget.value + "px";
// }


//каюсь, знайшов в інтернеті... Я розумію як працює, але як реалізувати не знаю і не вмію(поки шо). В конспекті такого не знайшов, на відеоуроках не обговорювали здається.

const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");

const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", handleInput);