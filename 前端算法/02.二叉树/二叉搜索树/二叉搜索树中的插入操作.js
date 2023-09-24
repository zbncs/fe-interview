// https://leetcode.cn/problems/insert-into-a-binary-search-tree/description/

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function(root, val) {
    if (root === null) return new TreeNode(val)

    if (root.val > val && root.left) {
        insertIntoBST(root.left, val)
    } else if (root.val > val && !root.left) {
        root.left = new TreeNode(val)
    }

    if (root.val < val && root.right) {
        insertIntoBST(root.right, val)
    } else if (root.val < val && !root.right) {
        root.right = new TreeNode(val)
    }

    return root
};
