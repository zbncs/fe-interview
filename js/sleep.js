// 方法一
function sleep1(time) {
  const now = Date.now();

  while(Date.now() - now < time) {}
}

function sleep2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, time)
  })
}

const array = [1, 2, 3]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // sleep1(1000)
  // console.log(element);
}

async function test() {

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    await sleep2(1000);
    console.log(element);
  }
}

test()






