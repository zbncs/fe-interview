function curry(fn, ...argus) {
  const len = fn.length;
  argus = argus || []

  if(len === argus.length) {
    return fn.apply(this, argus)
  }

  return function() {
    const _arg = [...arguments].concat(argus)
    if(_arg.length < len) {
      return curry.apply(this, fn, _arg)
    }
    return fn.apply(this, _arg)
  }
}

function add(a, b, c) {
  return a +b + c
}

const add1 = curry(add, 1, 2, 0);

console.log(add1);




