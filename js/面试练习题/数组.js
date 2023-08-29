const arr = [
    {name:'a', age:23},
    {name:'b', age:33},
    {name:'c', age:9},
    {name:'d', age:17},
    {name:'e', age:25},
    {name:'f', age:18},
]

// 按照年龄排序
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age)
}

console.log(sortByAge(arr))

console.log(arr)


console.log(Array.from(new Set([1, 2].concat([3,4]))))
