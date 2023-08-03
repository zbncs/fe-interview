function test() {
  var a = 10;
  return function() {
    console.log(a);
  }
}

var t = test()
t() // test执行完，变量a不会被销毁







