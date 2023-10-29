const obj = Object.create({a: 1, b: 2})

console.log(1, obj)
console.log(2, obj.prototype) // 没有显示原型
console.log(3, obj.__proto__)
