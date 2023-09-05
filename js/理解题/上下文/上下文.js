
'use strict'; // 注意严格模式

function foo() {
  console.log(this);
}

function callFoo(fn) {
  fn();
}

let obj1 = { foo };

callFoo(obj1.foo);


var x = 5;
var y = 5;

function Operations(op1 = x, op2 = y) {
  this.x = op1;
  this.y = op2;
};

Operations.prototype.sum = () => this.x + this.y;

// Operations.prototype.sum = function() {
//   return this.x + this.y
// }

const op = new Operations(10, 20);

console.log(op.sum());


// const a = 3, b = 4;
var a = 3, b = 5;
const obj = {
  a: 1,
  b: 2,
  sum: () => this.a + this.b
}


console.log(obj.sum())

