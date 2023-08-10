// 节流：固定时间执行一次，不会重置时间

function throttle(fn, wait) {
    let arg = null;
    let context = null;
    let now = 0, pre = 0;

    return function() {
        context = this;
        arg = [...arguments]
        now = new Date().getTime();

        while(now - pre > wait) {
            fn.apply(context, arg);
            pre = now;
        }
       
    }
}

function throttle1(fn, wait) {
    let context = null;
    let timer = null;
    let arg = null;

    return function() {
        context = this;
        arg = [...arguments];
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, arg);
                clearTimeout(timer);
                timer = null;
            }, wait)
        }
    }
}


