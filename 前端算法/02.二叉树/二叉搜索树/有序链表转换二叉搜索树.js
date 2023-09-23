// https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/description/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// 递增的数组nums
const sortedArrayToBST = function(nums) {
    if (!nums.length) return null

    const midIndex = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[midIndex])

    root.left = sortedArrayToBST(nums.slice(0, midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex+1))

    return root
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST1 = function(head) {
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return sortedArrayToBST(arr)
}

// 将数组转成链表
function arrToList(arr) {
    let head = new ListNode(arr[0])
    let root = {
        head
    }

    for (let i = 1; i < arr.length; i++) {
        root.head.next = new ListNode(arr[i])
        root.head = root.head.next
    }

    return head
}

const head = arrToList([-10,-3,0,5,9, 10]);

/**
 * 快慢指针，快指针走到头时，慢指针在中间
 * @param head
 * @returns {TreeNode}
 */
const sortedListToBST2 = function(head) {

    function deep(head, tail) {
        if (head === tail) return null
        let slow = head
        let fast = head

        // 保证slow最终走到中间
        while (fast !== tail && fast.next !== tail) {
            fast = fast.next.next
            slow = slow.next
        }

        let root = new TreeNode(slow.val)

        root.left = deep(head, slow)
        root.right = deep(slow.next, tail)

        return root

    }

    return deep(head, null)

}

console.log(sortedListToBST2(head))
