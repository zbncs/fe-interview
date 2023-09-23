// https://leetcode.cn/problems/maximum-binary-tree/description/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function(nums) {
    if (!nums.length) {
        return null
    }
    let max = Math.max(...nums)
    let maxLen = nums.indexOf(max)
    let leftArr = nums.slice(0, maxLen)
    let rightArr = nums.slice(maxLen+1)

    let root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(leftArr)
    root.right = constructMaximumBinaryTree(rightArr)

    return root
};

