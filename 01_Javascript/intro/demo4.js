var age = 18;
var balance = 15;
var pricePerBeer = 5;
console.log("go to the pub");
while (balance >= pricePerBeer) {
  console.log("have a beer");
  balance = balance - 5; //produce new value
}
console.log("go home");
//'go to the pub'
//'have a beer'
//'have a beer'
//'have a beer'
//'go home'

var i = 1;
while (i < 21) {
  console.log(i);
  i = i + 1;
}
// print 1 to 20

var i = 23;
while (i < 21) {
  console.log(i);
  i = i + 1;
}

// print nothing, 23>21, it doesnt meet the condition then jump to the end

var i = 1;
while (i < 6) {
  console.log(i);
  i = i + 1;
}
