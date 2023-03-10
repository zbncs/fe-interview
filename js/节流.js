// 节流：固定时间执行一次，不会重置时间

function throttle(fn, time) {
    let pre = +new Date()

    return function() {
        let now = +new Date()
        if (now - pre > time) {
            fn.apply(this, arguments)
            pre = now
        }
    }
}



