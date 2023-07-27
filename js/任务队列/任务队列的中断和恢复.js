/**
 * 依次*顺序*执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，不可中断，只能在两个任务之间中断
 */

function processTasks(...tasks) {
    let isRunning = false
    const result = []
    let i = 0 // 利用闭包记录执行到的位置
    return {
        start: function() {
            return new Promise(async (resolve) => {
                // 当前任务正在执行，不会做任何事情
                if (isRunning) return;
                isRunning = true
                while(i < tasks.length) {
                    console.log(`任务${i}开始`);
                    try {
                        result.push(await tasks[i]())
                    } catch (error) {
                        result.push(error)
                    }
                    console.log(`任务${i}完成`);
                    i++
                    if (!isRunning) {
                        return
                    }
                }
                isRunning = false
                resolve(result)
            })
        },
        pause: function() {
            isRunning = false
        }
    }
}






