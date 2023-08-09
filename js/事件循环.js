console.log(1);

setTimeout(() => {
  console.log(2);
}, 2000)


setTimeout(() => {
  console.log(3);
}, 1000)


new Promise((resove, reject) => {
  resove(1);
  console.log(4);
}).then(() => {
  console.log(5);
})

console.log(6);


