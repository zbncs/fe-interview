// 使用 setTimeout 实现 setInterval

function mySetInterval(fn, time) {

  const callback = () => {
    fn()
    setTimeout(callback, time)
  }

  setTimeout(callback, time)

}

mySetInterval(() => {
  console.log(1);
}, 1000)


