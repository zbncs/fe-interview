function twoSum(arr, target) {
    const mp = new Map()
    for (let i = 0; i < arr.length; i++) {
        const temp = target - arr[i]
        if (mp.has(temp)) {
            return [mp.get(temp), i]
        }
        mp.set(arr[i], i)
    }
}

console.log(twoSum([1, 2, 3, 4], 3))
