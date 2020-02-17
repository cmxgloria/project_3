console.log("default paraments");
function areas(width, height = 5) {
  return width * height;
}
areas(4);
// 4 will be width, define one argument only last argument like height
// otherwise areas(4,5), then parameter height can not pass specific number

function sayHello(name = "dt") {
  console.log(`hello ${name}`);
}
sayHello();
// hello dt
function sayHello(name) {
  console.log(`hello ${name}`);
}
sayHello("pokerface");
// hello pokerface
