/**
 * 依次*顺序*执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，不可中断，只能在两个任务之间中断
 */

function processTasks(...tasks) {
    let i = 0
    const res = []
    let isRunning = false
    return {
        start() {
           return new Promise(async resolve => {
            if (isRunning) {
                return
            }
            isRunning = true
            while (i < tasks.length) {
                try {
                    res.push(await tasks[i]())
                } catch (error) {
                    res.push(error)
                }

                i++
                if (!isRunning) {
                    break
                }
                
            }
            isRunning = false
            resolve(res)
           })
        },
        pause() {
            isRunning = false
        }
    }
}
