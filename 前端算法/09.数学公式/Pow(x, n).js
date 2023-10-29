// https://leetcode.cn/problems/powx-n/description/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 *
 * n 是一个整数
 * 要么 x 不为零，要么 n > 0 。
 */
const myPow = function (x, n) {
    if (n === 0) {
        return 1
    } else if (n === 1) {
        return x
    } else if (n < 0) {
        return myPow(1/x, -n)
    } else {
        return n % 2 === 0 ? myPow(x*x, n / 2) : myPow(x * x, Math.floor(n / 2)) * x
    }
}

console.log(myPow(8.88023, 3))
