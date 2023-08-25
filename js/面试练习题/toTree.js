function toTree(arr) {
    const obj = {}
    let res = {}
    for (const key in arr) {
        obj[key] = arr[key]
    }

    for (const key in obj) {
        if (obj[key].parent !== null) {
            obj[obj[key].parent].child = obj[key]
        } else {
            res = obj[key]
        }
    }

    return res
}

var arr = [
    { id: 3, parent: 2 },
    { id: 1, parent: null },
    { id: 2, parent: 1 },
];

console.log(toTree(arr))