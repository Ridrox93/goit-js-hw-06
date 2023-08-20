const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

let ulelement = document.querySelector("Ul");
console.log(ulelement);
let liElementInMemory = [];

ingredients.forEach((item) => {
  let liElemetn = document.createElement("li");
   liElemetn.textContent = item;
   liElemetn.classList.add("item");
  liElementInMemory.push(liElemetn);
});

ulelement.append(...liElementInMemory)
