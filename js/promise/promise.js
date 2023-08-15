const PENDING = 'pending'
const FULLFILED = 'fullfiled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(callback) {
        this.status = PENDING
        this.value = null

        try {
            callback(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
        }
        
    }

    changeStatus(status, val) {
        if (this.status !== PENDING) {
            return
        }
        this.status = status
        this.value = val
    }

    _resolve(val) {
        this.changeStatus(FULLFILED, val)
    }
    _reject(reason) {
        this.changeStatus(REJECTED, reason)
    }

    then(onFullfiled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.status === FULLFILED) {
                if (onFullfiled) {
                    resolve(onFullfiled(this.value))
                } else {
                    resolve(this.value)
                }
                
            } else if (this.status === REJECTED) {
                if (onRejected) {
                    reject(onRejected(this.value))
                } else {
                    reject(this.value)
                }
            }
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    finally(fn) {
        fn()
        return this
    }

    static resolve(val) {
        return new MyPromise((resolve, reject) => {
            resolve(val)
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promiseArr) {
        const ret = []
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                MyPromise.resolve(pro[i]).then(res => {
                ret[i] = res
                if (i === promiseArr.length - 1) {
                    resolve(ret)
                }
                }).catch(err => {
                    return reject(err)
                })
                
            }
        })
    }

    static race(promiseArr) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                MyPromise.resolve(promiseArr[i]).then(res => {
                    return resolve(res)
                }).catch(err => {
                    return reject(err)
                })
            }
        })
    }

    static any(promiseArr) {
        const ret = []
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                MyPromise.resolve(promiseArr[i]).then(res => {
                    return resolve(res)
                }).catch(err => {
                    ret[i] = err
                    if (i === promiseArr.length - 1) {
                        reject(ret)
                    }
                })
            }
        })
    }

    static allSettled(promiseArr) {
        const ret = []
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                MyPromise.resolve(promiseArr[i]).then(res => {
                    ret[i] = res

                    if (i === promiseArr.length - 1) {
                        resolve(ret)
                    }
                }).catch(err => {
                    ret[i] = err
                    if (i === promiseArr.length - 1) {
                        resolve(ret)
                    }
                })
            }
        })
    }

}


const pro = new MyPromise((resolve, reject) => {
    reject('111111111')
}).then(res => {
    console.log(999, res);
}).catch(err => {
    console.log(100000, err);
}).finally(() => {
    console.log('finally');
})

MyPromise.resolve(1).then(res => {
    console.log('static', res);
})

console.log(123456, pro);


