var secondLastItem = document.querySelectorAll(".item")[4];
secondLastItem.addEventListener("click", function() {
  secondLastItem.classList.add("completed");
});

//same way as above
var secondLastItem = document.querySelectorAll(".item")[4];
secondLastItem.addEventListener("click", function(event) {
  event.target.classList.add("completed");
  // event.target equal to secondLastItem
});

//if target all items
// var secondLastItem = document.querySelectorAll(".item")[4];
var allItem = document.querySelectorAll(".item");
allItem.addEventListener("click", function(event) {
  event.target.classList.add("completed");
});

//cross any item when we click
var allItems = document.querySelectorAll(".item");

for (var i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener("click", function(event) {
    event.target.classList.add("completed");
  });
}
//cross any item when we click using forEach
var allItems = document.querySelectorAll(".item");
allItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.target.classList.add("completed");
  });
});

//cross all items at a time
//check if all selected
var allItems = document.querySelectorAll(".item");
allItems.forEach(function(item) {
  item.addEventListener("click", function(event) {
    event.target.classList.add("completed");
    if (document.querySelectorAll(".completed").length === 6) {
      console.log("all done");
    }
  });
});
