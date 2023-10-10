const shoppingList = [];
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");
shoppingList.splice(1, 1, "Bananas", " Eggs");
shoppingList.pop();
shoppingList.indexOf("Milk");
shoppingList.splice(1, 0, "Carrots", "Lettuce");
const newShoppingList = ["Juice", "Pop"];
const combinedTwice = shoppingList
  .concat(newShoppingList)
  .concat(newShoppingList);
combinedTwice.lastIndexOf("Pop");
// console.log(combinedTwice)
