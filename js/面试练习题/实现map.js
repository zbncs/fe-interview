Array.prototype.myMap = function (callback) {
    let res = []
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
       res.push(callback(arr[i], i))
    }

    return res
}

const arr = [1, 3, 5, 7].myMap((it, ind) => it + ind)
console.log(arr)
