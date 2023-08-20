const UlElement = document.querySelector("#categories");
const UlElementArray = [...UlElement.children];


console.log(`Number of categories: ${UlElementArray.length}`);


UlElementArray.forEach((item) => {
  
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});