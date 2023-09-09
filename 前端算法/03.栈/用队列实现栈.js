// https://leetcode.cn/problems/implement-stack-using-queues/

// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）

/**
 *
 * @constructor
 */

const MyStack = function() {
    // 主队列
    // 保证主队列的头部是最新的值
    this.queue = []
    /**
     * 辅助队列
     *
     */
    this._queue = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1) {
        this._queue.push(this.queue.shift())
    }

    const top = this.queue.shift()

    while (this._queue.length) {
        this.queue.push(this._queue.shift())
    }

    return top

};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


