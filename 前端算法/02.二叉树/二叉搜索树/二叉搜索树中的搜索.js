// https://leetcode.cn/problems/search-in-a-binary-search-tree/description/

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        if (root.val === val) {
            return root
        }

        root = root.right
    }

    return null

};
