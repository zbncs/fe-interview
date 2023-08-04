console.log('start')

setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)

setImmediate(function immediate () {
  console.log('immediate');
});

setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)

Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')

// setImmediate 和 setTimeout执行顺序问题，不确定