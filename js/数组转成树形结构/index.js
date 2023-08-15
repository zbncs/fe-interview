// 目标数组
var arr = [
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
];

// 期望结果
var obj = {
  id: 1,
  parent: null,
  child: {
    id: 2,
    parent: 1,
    child: {
      id: 3,
      parent: 2,
    },
  },
};

function arrToTree(arr) {
  const temp = {}
  let res = {}
  for (const obj of arr) {
    temp[obj.id] = obj;
  }

  for (const key in temp) {
    if (temp[key].parent !== null) {
      temp[temp[key].parent].child = temp[key]
    } else {
      res = temp[key]
    }
  }

  return res;
}

console.log(arrToTree(arr));


