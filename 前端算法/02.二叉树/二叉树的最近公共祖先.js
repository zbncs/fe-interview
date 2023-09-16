// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/

/**
 * @param {TreeNode} root 节点
 * @param {TreeNode} p 节点
 * @param {TreeNode} q 节点
 * @return {TreeNode} 节点
 */
const lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return null
    }

    if (root === p || root === q) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p. q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left && right) {
        return root
    }

    return left ? left : right

};
