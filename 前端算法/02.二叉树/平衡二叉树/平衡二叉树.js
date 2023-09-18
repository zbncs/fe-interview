// https://leetcode.cn/problems/balanced-binary-tree/description/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    function deep(root) {
        if (root === null) {
            return 0
        }

        return Math.max(deep(root.left), deep(root.right)) + 1
    }

    if (root === null) {
        return true
    }

    let left = deep(root.left), right = deep(root.right)

    if (Math.abs(left - right) > 1) {
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced1 = (root) => {
    function deep(root) {
        if (root === null) {
            return 0
        }

        let left = deep(root.left)
        let right = deep(root.right)

        if (left === -1 || right === -1) {
            return -1
        }

        if (Math.abs(left - right) > 1) {
            return -1
        }

        return Math.max(left, right) + 1
    }

    return deep(root) !== -1
}

console.log(isBalanced1(root))

