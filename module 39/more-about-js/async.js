console.log(1);
console.log(2);
console.log(3);
doSomething();
const timeoutId = setTimeout(() => {
  console.log('set time out');
}, 4000);
console.log(5);
console.log(6);
console.log(7);

function doSomething() {
  console.log(4);
}
let num = 0;
const intervalId = setInterval(() => {
  console.log(++num);
}, 1000);
