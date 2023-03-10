// 防抖：过多长时间执行一次，如果在规定的时间间隔中再次触发，时间就会重新计算。

// 关键点：绑定的this和arguments ====> 都是返回函数的中进行的绑定的

function debounce(fn, time) {
    let timer = null;
    let argus = null;
    return function() {
        const that = this
        argus = arguments
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(that, argus)
        }, time)
    }
}



