function deepClone(target) {
  let res
  if (Array.isArray(target)) {
    res = []
    for (let i = 0; i < target.length; i++) {
      const it = target[i]
      if (Array.isArray(it) || (typeof target === 'object' && target !== null)) {
        res.push(deepClone(it))
      } else {
        res.push(it)
      }
    }
  } else if (typeof target === 'object' && target !== null) {
    res = {}
    for (let key in target) {
      const it = target[key]
      if (Array.isArray(it) || (typeof target === 'object' && target !== null)) {
        res = {...res, [key]: deepClone(it)}
      } else {
        res = {...res, [key]: it}
      }
    }
  } else {
    res = target;
  }

  return res;
}


var stu = {
  name: "xiejie",
  age: 18,
  a: null,
  b: undefined,
  c: Date(),
  stuInfo: {
      No: 1
  },
  sayHello() {
      console.log("Hello");
  }
}
const obj = deepClone(stu)
obj.age = 19
obj.stuInfo.No = 10
console.log(111, obj);



