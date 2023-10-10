const myCar = {
  model: "Toyota",
  make: true,
  color: "Red",
  forSale: true,
};
myCar["color"] = "Black";
myCar["forSale"] = false;
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.forSale);
