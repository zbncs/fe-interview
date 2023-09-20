// https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = function (root) {
    const res = []

    const queue = [root]

    while (queue.length) {
        let len = queue.length
        let sum = 0

        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            sum += node.val

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        res.push((sum / len).toFixed(5))
    }

    return res
}

