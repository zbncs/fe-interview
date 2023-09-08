// class EventBus {
//     // on 用于注册事件
//     // emit 用于触发事件
//     constructor() {
//         this.callback = []
//     }
//     on(eventName, cb) {
//         // code here
//
//         this.callback.push({
//             eventName,
//             cb
//         })
//
//
//     }
//     emit(eventName, arg) {
//         // code here
//         if (this.callback.length === 0) {
//             return
//         }
//
//         this.callback.forEach(it => {
//             if (it.eventName === eventName) {
//                 it.cb(arg)
//             }
//         })
//
//     }
// }
//
// // 调用参考
// const bus = new EventBus();
// bus.on('event01', (eventArg) => console.log('event01', eventArg));
// bus.emit('event01', 123); //输出：event01 123


// 节流：函数每一段时间内只会执行一次
function throttle(fn, wait) {
    // code here

    let pre = 0

    return function(...args) {
        let now = +new Date()
        if (now - pre > wait) {
            fn.apply(this, args)
            pre = now
        }
    }










}

// 调用参考
const throttleFn = throttle((arg) => {console.log(arg)}, 1000);
throttleFn(1) // 1
throttleFn(1)
