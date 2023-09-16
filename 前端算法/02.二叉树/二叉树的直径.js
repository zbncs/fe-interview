// https://leetcode.cn/problems/diameter-of-binary-tree/description/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = [1,2,3,4,5]

const temp = root.map(it => new TreeNode(it, null, null))


const l = new TreeNode(2, temp[3], temp[4])
const r = new TreeNode(3, null, null)
const h = new TreeNode(1, l, r)

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    let len = 0
    function dfs(root) {
        if (root === null) {
            return 0
        }

        let left = dfs(root.left)
        let right = dfs(root.right)

        len = Math.max(len, left + right)

        return Math.max(left, right) + 1
    }

    // 从子节点开始处理
    dfs(root)

    return len
}

console.log(diameterOfBinaryTree(h))
