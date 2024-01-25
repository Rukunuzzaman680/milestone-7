function a() {
  console.log('a');
  b();
  console.log('aa');
}
function b() {
  console.log('b');
  c();
  console.log('bb');
}
function c() {
  console.log('c');
  console.log('cc');
}

setTimeout(() => {
  console.log('set time out');
}, 4000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

a();
