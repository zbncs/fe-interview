// 防抖：过多长时间执行一次，如果在规定的时间间隔中再次触发，时间就会重新计算。

function debounce(fn, wait) {

    let timer = null, argus = null;
    let context = null;

    // window
    console.log(333, this);

    return function() {
        // 绑定事件的目标
        // console.log(666, this);
        argus = [...arguments]
        context = this;
        if (timer) {
            clearTimeout(timer)
        }
        
        timer = setTimeout(() => {
            fn.apply(context, argus)
        }, wait)
    }
}



