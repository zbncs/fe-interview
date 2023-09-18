// https://leetcode.cn/problems/binary-tree-paths/description/

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    let paths = []

    function deep(root, p = '') {
        if (root === null) {
            return null
        }
        // 叶子结点
        if (root.left === null && root.right === null) {
            paths.push(p+root.val)
        }
        p += root.val + '->'

        deep(root.left, p)
        deep(root.right, p)
    }
    deep(root, '')
    return paths
}

