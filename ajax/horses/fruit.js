var items = [
  { name: "apple", type: "fruit", price: 2, discount: 0 },
  { name: "banana", type: "fruit", price: 4, discount: 1 },
  { name: "orange", type: "fruit", price: 3, discount: 2 },
  { name: "potato", type: "vegie", price: 5, discount: 0 },
  { name: "brocoli", type: "vegie", price: 2, discount: 2 }
];
// calculate total price of fruit after discount
// final price is price - discount

console.log(
  items
    .filter(item => item.type === "fruit")
    .map(fruit => fruit.price - fruit.discount)
    .reduce((accum, fruitPrice) => accum + fruitPrice)
);
