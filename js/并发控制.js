function timeout(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}


class SuperTask {
    /**
     * @param {Number} paralleCount 并发数量
     */
    constructor(paralleCount = 2) {
        this.paralleCount = paralleCount
        this.runningCount = 0
        this.taskArr = []
    }
    add(task) {
        return new Promise((resolve, reject) => {
           this.taskArr.push({
            task,
            resolve,
            reject
           })
           this.run()
        })
    }
    run() {
        while (this.paralleCount > this.runningCount && this.taskArr.length > 0) {
            const {task, resolve, reject} = this.taskArr.shift()
            this.runningCount++
            task().then(resolve, reject).finally(() => {
                this.runningCount--
                this.run()
            })

        }
    }
}

const superTask = new SuperTask()
function addTask(time, name) {
    superTask
        .add(() => timeout(time))
        .then(() => {
            console.log(`任务${name}完成`);
        })
}

addTask(10000, 1) // 10000ms: 输出任务1
addTask(5000, 2) // 5000ms: 输出任务2
addTask(3000, 3) // 8000ms: 输出任务3
addTask(4000, 4) // 12000ms: 输出任务4
addTask(5000, 5) // 15000ms: 输出任务5


