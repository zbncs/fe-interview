// 实现一个0延时的setTimeout

let messageName = 'zeroTimeout'
let timeout = []
function setZeroTimeout(callback) {
    timeout.push(callback)
    window.postMessage(messageName, '*')
}

// true: 捕获， false: 冒泡（默认）

window.addEventListener('message', (e) => {
    if (e.data === messageName) {
        if (timeout.length > 0) {
            const fn = timeout.shift()
            fn()
        }
    }
}, true)

window.setZeroTimeout = setZeroTimeout;



