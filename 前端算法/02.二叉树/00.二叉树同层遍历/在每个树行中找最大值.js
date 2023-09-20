// https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
    let res = []
    if (root === null) {
        return res
    }

    let queue = [root]
    while (queue.length) {
        let len = queue.length

        let max = queue[0].val
        while (len--) {
            let node = queue.shift()

            if (max < node.val) {
                max = node.val
            }

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        res.push(max)
    }

    return res
};
