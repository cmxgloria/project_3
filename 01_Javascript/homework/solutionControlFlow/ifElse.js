//if else if

var year = 2020;
if (year > 2019) {
  console.log("Greetings from the future!");
} else if (year < 2019) {
  console.log("Whoa! Blast from the past!");
} else {
  console.log("I'm in the present!");
}

//The Vegan Test
var veganMenu = ["fruitSalad", "tofurkey"];
var menu = ["Steak", "fruitSalad", "tofurkey", "porkChops"];
var choice = prompt("type in your choice");
if (veganMenu.indexOf(choice) !== -1) {
  console.log("This cuisine is vegan friendly.");
} else {
  console.log("Vegans beware!");
}

//another way
var choice = "steak";
if (choice == "steak" || choice == "porkChops") {
  console.log("vegan beware");
} else {
  console.log("This cuisine is vegan friendly.");
}
//another way
var choice = prompt("type in your choice");
if (choice == "steak" || choice == "porkChops") {
  console.log("vegan beware");
} else {
  console.log("This cuisine is vegan friendly.");
}

//The even/odd reporter
for (var i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd number");
  }
}

//Multiplication Tables
var num = 1;
for (var i = 1; i <= 10; i++) {
  num = i * 9;
  console.log(num);
}
