function deepClone(obj) {
    let mp = new Map()

    function isObject(data) {
        return (typeof data === 'object' && data) || typeof data === 'function'
    }
    function clone(obj, mp) {
        let res = Array.isArray(obj) ? [] : {}

        if (mp.has(obj)) {
           return mp.get(obj)
        }

        mp.set(obj, res)

        if (!isObject(obj)) {
            return obj
        }

        Reflect.ownKeys(obj).forEach(key => {
            const it = obj[key]

            if (it instanceof RegExp) {
                res[key] = new RegExp(it)
            } else if (it instanceof Date) {
                res[key] = new Date(it)
            } else if (it instanceof Map) {
                const result = new Map()
                mp.set(it, result)

                it.forEach((val, key) => {
                    if (isObject(val)) {
                        result.set(key, clone(val, mp))
                    } else {
                        result.set(key, val)
                    }
                })

                res[key] = result
            } else if (it instanceof Set) {
                const result = new Set()
                mp.set(it, result)

                it.forEach((val) => {
                    if (isObject(val)) {
                        result.add(clone(val, mp))
                    } else {
                        result.add(val)
                    }
                })

                res[key] = result
            } else if (isObject(it)) {
                res[key] = clone(it, mp)
            } else {
                res[key] = it
            }
        })

        return res
    }


    return clone(obj, mp)

}


const obj = {
    name: '123',
    arr: [1, 10, '123'],
    data: {
        name: 'abc',
        age: 20,
    },
    field: null,
    ceShi: undefined,
    sym: Symbol('sym'), // symbol
    bigIn: BigInt(1n), // bigint
    // 函数
    func: function () {
        console.log('我是一个函数')
    },
    // 日期
    date: new Date(0),
    // 正则
    reg: new RegExp('/我是一个正则/ig'),
    // Map
    map: new Map().set('mapKey', 1),
    // Set
    set: new Set().add('set'),
    // =========== 3.其他 ===========
    [Symbol('1')]: 1  // Symbol作为key
}

obj.other = obj;
obj.data.a = obj.data;


console.log(deepClone(obj))






