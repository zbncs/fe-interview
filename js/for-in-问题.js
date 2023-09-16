// for in 遍历问题
const obj = {
    a: 1,
    b: 3,
    c: 5
}

obj.__proto__.d = 1

obj.__proto__.fn = () => {
    console.log(1)
}

for (const key in obj) {
    console.log('proto', key)
}

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log('has', key)
    }
}

