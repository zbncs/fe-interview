// 原型对象，构造函数，实例对象

// 原型对象.constructor = 构造函数

// 构造函数.prototype = 原型对象

// 实例对象 = new 构造函数()

// 实例对象.__proto__ = 原型对象

// 原型对象.__proto__ = Object.prototype

// Object.prototype.__proto__ = null

// Object.prototype.constructor === Object

// Function.prototype.constructor === Function

// Object.__proto__ === Function.prototype

// 


var F = function() {};
Object.prototype.a = function() {
  console.log('a');
};
Function.prototype.b = function() {
  console.log('b');
}

/**
 * f：实例对象
 * F：构造函数
 * 
 * 
 * F：实例对象
 * Function: 构造函数
 * 
 */

var f = new F();
f.a();
// f.b();
F.a();
F.b()

console.log(F.__proto__ === Function.prototype);

