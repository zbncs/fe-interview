// https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/

var minDepth = function(root) {
    if (root === null) {
        return 0
    }

    // 左右节点都没有
    if (!root.left && !root.right) {
        return 1
    }

    // 只有右节点
    if (!root.left) {
        return minDepth(root.right) + 1
    }

    // 只有左节点
    if (!root.right) {
        return minDepth(root.left) + 1
    }

    // 左右节点都有
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

