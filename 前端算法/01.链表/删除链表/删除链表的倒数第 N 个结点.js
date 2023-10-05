// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const a = require('../数组转链表')

// const head = a.arrToList([1,2,3,4,5])
const head = a.arrToList([1])
// const head = a.arrToList([1,2,3,4,5])

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd1 = function (head, n) {
    let len = 0
    let h = {
        next: head
    }
    let m = h

    while (m.next) {
        len++
        m = m.next
    }

    let k = h
    let i = 0

    while (k) {
        i++
        if (i === len - n + 1) {
            k.next = k.next.next
        }
        k = k.next
    }
    return h.next
};

const removeNthFromEnd = function (head, n) {
    let record = new Map();
    let dummy = new ListNode(0, head);
    let cur = dummy, count = 0;
    while (cur !== null) {
        record.set(count++, cur);
        cur = cur.next
    }
    record.set(count, null)
    record.get(count - n - 1).next = record.get(count - n + 1);
    return dummy.next;
};

console.log(100, removeNthFromEnd(head, 1))
