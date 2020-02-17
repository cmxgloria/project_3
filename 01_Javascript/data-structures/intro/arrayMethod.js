//pop() method removes the last element from an array
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.pop();
console.log(elector);
//["lord buckethead", "elmo", "theresa may"]

//push() method adds a new element to an array (at the end)
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.push("gloria");
console.log(elector);
//["lord buckethead", "elmo", "theresa may", "mr fish finger", "gloria"]

//shift() method removes the first array element and "shifts" all other elements to a lower index
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.shift();
console.log(elector);
//["elmo", "theresa may", "mr fish finger"]

//unshift() method adds a new element to an array (at the beginning)
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.unshift("gloria");
console.log(elector);
//["gloria", "lord buckethead", "elmo", "theresa may", "mr fish finger"]

//join() method also joins all array elements into a string
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
console.log(elector.join());
//'lord buckethead,elmo,theresa may,mr fish finger'

//concat() method is used to join two or more arrays,This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
const electionPlaces = ["fitzroy", "st kilda", "collingwood", "brunswick"];
const placesToGo = elector.concat(electionPlaces);
console.log(placesToGo);
//["lord buckethead", "elmo", "theresa may", "mr fish finger", "fitzroy", "st kilda", "collingwood", "brunswick"]

//The indexOf() method returns the position of the first occurrence of a specified value in a string.This method returns -1 if the value to search for never occurs.
/* Find the first occurrence of the letter "e" in a string, starting the search at position 5:
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("e", 5);
//14?
*/
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
console.log(elector.indexOf("mr fish finger"));
//3

//slice() method slices out a piece of an array into a new array
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
console.log(elector.slice(1, 3));
//["elmo", "theresa may"]

//reverse() method reverses the order of the elements in an array
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
console.log(elector.reverse());
//["mr fish finger", "theresa may", "elmo", "lord buckethead"]

/*The splice() method can be used to add new items to an array,The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.The splice() method returns an array with the deleted items*/
const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.splice(2, 0, "gloria", "justin");
console.log(elector);
//["lord buckethead", "elmo", "gloria", "justin", "theresa may", "mr fish finger"]

const elector = ["lord buckethead", "elmo", "theresa may", "mr fish finger"];
elector.splice(2, 2, "gloria", "justin");
console.log(elector);
//["lord buckethead", "elmo", "gloria", "justin"]

//string method

//indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
const placesToGo = "We are going to the beach on Sunday";
const whereToGo = placesToGo.indexOf("beach");
console.log(whereToGo);
//20

//slice() extracts a part of a string and returns the extracted part in a new string
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 16);
console.log(res);
//Banana, K

//split()
var toDo = "I am doing gardenning today";
var whatToDo = toDo.split(" ");
console.log(whatToDo);
//["I", "am", "doing", "gardenning", "today"]

//replace() method replaces a specified value with another value in a string
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);
// 'Please visit W3Schools'
