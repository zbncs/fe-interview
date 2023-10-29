function test() {
  var a = 10;
  return function() {
    console.log(a);
  }
}

// var t = test()
// t() // test执行完，变量a不会被销毁

var i = 5;
function fn(i) {
  return function (n) {
    console.log(n + (++i));
  }
}

console.log('-------------------------------------');

var f = fn(1);

f(2); // 4 i=2

fn(3)(4); // 8

fn(5)(6); // 12

f(7);  // 7 + (2+1) i = 3

console.log(i); // 5





