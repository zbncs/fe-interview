// https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
    if (!nums.length) return null

    const midIndex = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[midIndex])

    root.left = sortedArrayToBST(nums.slice(0, midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex+1))

    return root
};
