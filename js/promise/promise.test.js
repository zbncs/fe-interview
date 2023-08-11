// new Promise((resolve) => {
//   resolve(1)
// }).then(res => {
//   console.log(res);
//   return res +1
// }).catch(err => {
//   return 3
// }).then(res => {
//   console.log(11,res);
// })


const pro = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    // 只有reject或者resolve才会向下执行
    resolve();
    console.log(3);
  })
})

pro.then(() => {
  console.log(4);
})

console.log(5);

// 1 5 2 3 4
