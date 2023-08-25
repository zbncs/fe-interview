function random() {
    return new Array(100).fill(0).map((it, i) => i+1)
}

// console.log(random())


// 1 - 100
console.log(Math.floor(Math.random() * 100) + 1)

function random1() {
    return new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1)
}

console.log(random1())