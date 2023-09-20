// https://leetcode.cn/problems/n-ary-tree-level-order-traversal/description/

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    let res = []
    if (root === null) {
        return res
    }

    let queue = [root]
    while (queue.length) {
        let len = queue.length
        let level = []
        while (len--) {
            let node = queue.shift()
            level.push(node.val)

            node.children && queue.push(...node.children)
        }

        res.push(level)
    }

    return res
};
