// https://leetcode.cn/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    let left = 0
    let right = x

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (mid * mid > x) {
            right = mid - 1
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    // 循环结束都没找到相等的情况，此时right < left,所以根据题意：只保留整数部分 ，小数部分将被舍去
    // 所以找left 和 right 中最小的一个
    return right
};


console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))



