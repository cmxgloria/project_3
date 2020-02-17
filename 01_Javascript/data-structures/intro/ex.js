const favoriteRecipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log("title: " + favoriteRecipe.title);
console.log("serving: " + favoriteRecipe.serves);
console.log("ingredients: " + favoriteRecipe.ingredients);
for (let index = 0; index < favoriteRecipe.ingredients.length; index++) {
  console.log(favoriteRecipe.ingredients[index]);
}

// // loop through an array
// let num = [4,5,6];
// for(let i=1;i<num.length;i++){
//   console.log(num[i]);
// }
