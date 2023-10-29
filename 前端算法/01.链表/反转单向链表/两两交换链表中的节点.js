// https://leetcode.cn/problems/swap-nodes-in-pairs

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head
    }

    let newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head


    return newHead
}

// 迭代法

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs1 = function(head) {
    let h = {next: head}
    let n = h

    while (n.next && n.next.next) {
        let node1 = n.next
        let node2 = n.next.next

        // 保存新头部
        n.next = node2

        // 交换
        node1.next = node2.next
        node2.next = node1

        // 下次循环
        n = n.next
    }

    return h.next
}
