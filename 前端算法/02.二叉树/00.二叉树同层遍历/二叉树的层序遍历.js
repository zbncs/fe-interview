// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    let res = []
    if (root === null) {
        return res
    }
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        const level = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            level.push(node.val)

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        res.push(level)

    }


    return res
}
