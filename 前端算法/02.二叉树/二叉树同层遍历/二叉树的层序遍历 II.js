// https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
    let res = []
    if (root === null) {
        return res
    }

    const queue = [root]
    while (queue.length) {
        let len = queue.length
        let level = []

        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            level.push(node.val)

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        res.unshift(level)
    }

    return res
};


