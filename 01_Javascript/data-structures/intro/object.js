//key-value pairs
/*
 navigate complex, nested objects by chaining operators.
Objects are mutable—we can change their properties even when they’re declared with const.
Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
We can iterate through objects using the For...in syntax.
*/

var car = {
  color: "red",
  model: "sedan"
};
console.log(car.color);

var song = {
  title: "let it go",
  artist: {
    firstName: "elsa",
    lastName: "frozen",
    awards: ["aria", "grammy"]
  }
};
console.log(song.artist.awards[1]);
