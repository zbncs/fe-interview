// https://leetcode.cn/problems/path-sum/description/

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
    if (root === null) {
        return false
    }
    // 根节点到子节点的之和
    if (!root.left && !root.right) {
        return targetSum === root.val
    }

    const target = targetSum - root.val

    return hasPathSum(root.left, target) || hasPathSum(root.right, target)

};
