// https://leetcode.cn/problems/sum-of-left-leaves/description/

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
    let sum = 0
    function deep(root) {
        if (root === null) {
            return
        }
        let leftNode = root.left
        if (leftNode && !leftNode.left && !leftNode.right) {
            sum += leftNode.val
        }

        deep(root.left)
        deep(root.right)
    }

    deep(root)

    return sum
};
const sumOfLeftLeaves1 = function(root) {
    // 左叶子结点之和
    let sum = 0

    function deep(root, flag = 0) {
        if (root === null) {
            sum += 0
            return
        }

        if (!root.left && !root.right && flag === 0) {
            sum += 0
            return
        }

        if (!root.left && !root.right && flag === 1) {
            sum += root.val
        }

        deep(root.left, 1)
        deep(root.right, 2)
    }

    deep(root, 0)

    return sum
};
