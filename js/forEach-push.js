const arr = [1, 2, 3, 4, 5]

arr.forEach((it, index) => {
    console.log(123, it)
    // arr.push(1)
    arr.splice(index, 1)
})

console.log(arr)


const arr1 = [1, 2, 3, 4, 5, 6]

const tempArr = arr1.map(it => {
    arr1.push(0)

    return it + 1
})

// console.log(tempArr, arr1)


