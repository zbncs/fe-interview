const pro = new Promise((resolve, reject) => {
  console.log(0);
  resolve()
}).then(() => {
  console.log(1);
}).then(() => {
  console.log(5);
})


pro.then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
})

pro.then(() => {
  console.log(4);
})
