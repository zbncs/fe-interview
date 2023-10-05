// https://leetcode.cn/problems/merge-k-sorted-lists/description/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (lists.length < 1) {
        return null
    }

    function mergeTwo(l1, l2) {
        if (l1 === null) {
            return l2
        } else if (l2 === null) {
            return l1
        } else if (l1.val < l2.val) {
            l1.next = mergeTwo(l1.next, l2)
            return l1
        } else {
            l2.next = mergeTwo(l1, l2.next)
            return l2
        }
    }

    while (lists.length > 1) {
        const l1 = lists.splice(0, 1)[0]
        const l2 = lists.splice(0, 1)[0]

        lists.push(mergeTwo(l1, l2))
    }

    return lists[0]
}
