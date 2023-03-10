// 防抖：过多长时间执行一次，如果在规定的时间间隔中再次触发，时间就会重新计算。

function debounce(fn, time) {
    let timer = null;

    return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}



