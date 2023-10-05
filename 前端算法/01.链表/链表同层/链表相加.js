// https://leetcode.cn/problems/add-two-numbers/description/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const a = require('../数组转链表')

const l1 = a.arrToList([9,9,9,9,9,9,9])
const l2 = a.arrToList([9,9,9,9])

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let j = 0
    // 定义两个变量，使用另一个去循环
    let h = {
        next: new ListNode(0)
    }
    let n = h

    while (l1 || l2 || j) {
        if (!l1) l1 = new ListNode(0)
        if (!l2) l2 = new ListNode(0)

        let sum = l1.val + l2.val + j
        n.next = new ListNode(sum % 10)
        j = Math.floor(sum / 10)

        n = n.next
        l1 = l1.next
        l2 = l2.next
    }

    return h.next
}

addTwoNumbers(l1, l2)
