// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/

/**
 * 数组的一半递增，然后另一半也递增，也可以使用二分法
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    // [3,4,5,    1,2]

    // 不能等于，因为里面的条件没有处理相等的情况
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[right]) { // right是从最大索引开始的
            right = mid
        } else if (nums[mid] > nums[right]) {
            left = mid + 1
        }

    }

    return nums[left]
};


console.log(findMin([3,4,5,1,2]))
console.log(findMin([11,13,15,17]))
