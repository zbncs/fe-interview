// for of 
// 具有iterator接口

// Array String Map Set arguments

// 让对象具有iterator接口

Object.prototype[Symbol.iterator] = function() {
  let index = 0;
  let obj = this;
  let keys = Object.keys(obj);

  return {
    next() {
      if (index > keys.length - 1) {
        return {
          done: true,
          value: undefined
        }
      }

      return {
        done: false,
        value: obj[keys[index++]]
      }
    }
  }
}


var obj = {
  a: 1,
  b: 2,
  c: 3
}

for (const it of obj) {
  console.log(it);
}








