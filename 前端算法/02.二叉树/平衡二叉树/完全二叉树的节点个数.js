// https://leetcode.cn/problems/count-complete-tree-nodes/

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
    if (root === null) {
        return 0
    }

    const leftCount = countNodes(root.left)
    const rightCount = countNodes(root.right)

    return leftCount + rightCount + 1
}
