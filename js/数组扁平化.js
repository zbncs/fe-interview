function flat(arr) {
  const res = [];

  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const temp = flat(arr[i])
      console.log(111, temp, res);
      // concat 不会改变原数组，会返回一个新数组
      // res.concat(temp)
      res.push(...temp)
    } else {
      res.push(arr[i])
    }
  }

  return res;
}

const a = [1, 2];
const b = [3, 4];

a.concat(b)

console.log(a);

console.log(flat([1, [3, 5, [8, 9]], 0]));



