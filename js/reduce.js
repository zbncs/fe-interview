Array.prototype.myReduce = function(callback, init) {
  const array = this;
  let pre;
  let res;

  if (init !== undefined) {
    pre = init
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      res = callback(pre, element);
      pre = res;
    }
  } else {
    pre = array[0]
    for (let i = 1; i < array.length; i++) {
      const element = array[i];
      res = callback(pre, element);
      pre = res;
    }
  }

  return res;
}

const arr = [1, 2, 3, 4, 5]

const res = arr.myReduce((pre, now) => pre + now, 0)
console.log(res);
