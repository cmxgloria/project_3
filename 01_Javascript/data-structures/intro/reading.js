var book = [
  {
    title: "harry port",
    author: "rowling",
    already: true
  },
  {
    title: "midset",
    author: "caro dweck",
    already: false
  }
];
for (var index = 0; index < book.length; index++) {
  if (book[index].already === true) {
    var currentBook = book[index];
    console.log("You already read " + currentBook.title);
  } else {
    console.log("You still need to read" + currentBook.title);
  }
}
