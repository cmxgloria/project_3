var horses = [
  {
    name: "maythehorsebewithu",
    active: true,
    country: "AUS",
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: "my wife knows everthing",
    active: true,
    country: "USA",
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500
  },
  {
    name: "arrrrr",
    active: true,
    country: "USA",
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: "hoof hearted",
    active: false,
    country: "AUS",
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900
  },
  {
    name: "pony",
    active: false,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000
  },
  {
    name: "sunny boy",
    active: true,
    country: "AUS",
    yearOfBirth: 2003,
    hourlyRate: 42,
    numOfHoursWorked: 6450
  }
];
console.log("melbourne cup special");
// assume earning is hourly rate x number of hours work
// calculate the combine total earning for all aussie horses that earned more than 100k
// all return to new array , filter, map, reduce(similar fold), map and filter loop through each element and return new array; map you can not break in the middle, for loop can do more specific

// var isAussie = horse => {
//   return horse.country === "AUS";
// };
console.log(
  horses
    // .filter(isAussie)
    .filter(horse => horse.country === "AUS")
    .map(horse => horse.hourlyRate * horse.numOfHoursWorked)
    .filter(amount => amount > 100000)
    .reduce((accum, salary) => accum + salary)
);

var number = [1, 2, 3];
var numberDouble = number.map(num => num * 2);

var letters = ["a", "b", "c"];
letters.reduce((str, letter) => str + letter);
// 'abc' // can use .join
var letters = ["a", "b", "c"];
letters.reduce((letter, str) => str + letter);
// "cba"

Object.entries({ name: dt });
// buildin, change object to array
{
  name: dt;
}
[{ name: dt }];

// 378900
// origin way
// function totalEarning(horses) {
//   var totalEarning = 0;
//   for (var i = 0; i < horses.length; i++) {
//     if (horses[i].country === "AUS") {
//       var earning = horses[i].hourlyRate * horses[i].numOfHoursWorked;
//       if (earning > 10000) {
//         totalEarning = totalEarning = earning;
//       }
//     }
//   }
//   return totalEarning;
// }
