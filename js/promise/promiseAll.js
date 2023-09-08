function myPromiseAll(promiseArr) {
    // code here
    let result = []
    let index = 0
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            const promise = promiseArr[i]
            index++
            promise.then(res => {
                result[i] = res
                if (index === promiseArr.length) {
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        }
    })
}

// 调用参考
const promise1 = new Promise(resolve => resolve(1));
const promise2 = new Promise((resolve, reject) => reject(2));
const promise3 = new Promise(resolve => resolve(3));
const promiseAll = myPromiseAll([promise1, promise2, promise3]);
promiseAll.then(function(res) {
    console.log(res)
}).catch(err => {
    console.log(333, err)
})
