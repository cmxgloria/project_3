var combineWords = function(word1, word2) {
  return word1.concat(word2);
};

var result = combineWords("cake", "pudding");
console.log(result);

//cakepudding

var calculateAge = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  return age;
};
var myAge = calculateAge(1983, 2019);

console.log(`I am ${myAge} years old or ${myAge + 1} years old.`);

var lengths = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
};

var transmogrifier = function(num1, num2, num3) {
  return Math.pow(num1 * num2, num3);
};
console.log(transmogrifier());
//if pass 5,3,2,output 225

function wordReverse(string) {
  var result = string.split(" ");
  return result.reverse().join(" ");
}
wordReverse("we are good friends"),
  // output'friend good are we'

  function findLongestWord(arr) {
    var longestWord = "";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;
  };

//money tree
function printMoneyTree(rows) {
  for (var i = 1; i <= rows; i++) {
    // 2n+1 $ per row i.e. 1, 3, 5, 7, ...
    var dollarSigns = "$".repeat(2 * i - 1);
    var spacesBefore = " ".repeat(rows - i);
    console.log(spacesBefore + dollarSigns);
  }
}
