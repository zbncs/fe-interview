// new Promise((resove, reject) => {  })

class MyPromise {
    constructor(fn) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined

        // const resolve = value => {
        //     if (this.state === 'pending') {
        //         this.state = 'resolved'
        //         this.value = value
        //     }
        // }

        // const reject = reason => {
        //     if (this.state === 'pending') {
        //         this.state = 'rejected'
        //         this.reason = reason
        //     }
        // }

        try {
            fn(this.resolve, this.reject)
        } catch(e) {
            reject(e)
        }


    }

    resolve = value => {
        if (this.state === 'pending') {
            this.state = 'resolved'
            this.value = value
        }
    }

    reject = reason => {
        if (this.state === 'pending') {
            this.state = 'rejected'
            this.reason = reason
        }
    }

    then(onResolved, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === 'resolved') {
                const ret = onResolved(this.value)
                resolve(ret)
            } else if (this.state === 'rejected') {
                const ret = onRejected(this.reason)
                reject(ret)
            }
        })
    }

    catch(onRejected) {
        this.then(null, onRejected)
    }

    finally(callback) {
        this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            reason => MyPromise.resolve(callback()).then(() => {throw reason})
        )
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let count = 0
            const result = []
            promises.forEach((item, index) => {
                Promise.resolve(item).then(res => {
                    count++;
                    result[index] = res

                    if (count === promises.length) {
                        resolve(result)
                    }
                }).catch(e => {
                    reject(e)
                })
            })
        })
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach((item, index) => {
                Promise.resolve(item).then(res => {
                    resolve(res)
                }).catch(e => {
                    reject(e)
                })
            })
        })
    }

    static allSettled(promises) {
        return new Promise((resolve, reject) => {
            let count = 0
            const result = []
            promises.forEach((item, index) => {
                Promise.resolve(item).then(res => {
                    count++;
                    result[index] = res

                    if (count === promises.length) {
                        resolve(result)
                    }
                }).catch(e => {
                    count++;
                    result[index] = e
                    if (count === promises.length) {
                        resolve(result)
                    }
                })
            })
        })
    }


}



