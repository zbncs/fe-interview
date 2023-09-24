// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const generateTree = (arr) => {
    let root = new TreeNode(arr.shift())
    let nodeArr = [root]

    while (arr.length) {

        let node = nodeArr.shift()

        let left = new TreeNode(arr.shift())
        node.left = left.val === null ? null : left
        nodeArr.push(left)

        if (!arr.length) {
            break
        }

        let right = new TreeNode(arr.shift())
        node.right = right.val === null ? null : right
        nodeArr.push(right)

    }

    return root

}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
    let count = 0
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        count++
        if (count === k) {
            return root.val
        }
        root = root.right
    }

}

const root = generateTree([5,3,6,2,4,null,null,1])

console.log(kthSmallest(root, 5))
