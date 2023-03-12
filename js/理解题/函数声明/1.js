// 展示型四驱

'use strict';

// console.log(foo());

// let bar = 'bar';

// function foo() {
//   return bar;
// }

// bar = 'baz';



let func = function foo() {
  return 'hello';
}

console.log(typeof foo, typeof func);


// getBar()函数获取 bar从它的参数通过闭包。

function foo(bar, getBar = () => bar) {
  var bar = 10;
  console.log(getBar());
}

foo(5);
