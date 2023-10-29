// https://leetcode.cn/problems/longest-common-prefix/description/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let res = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let next = strs[i]
        let k = 0
        for (let j = 0; j < next.length; j++) {
            if (res[j] !== next[j]) {
                break
            }

            k++
        }
        res = k === -1 ? '' : res.slice(0, k)
    }

    return res
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["dog","dog","dog111"]))




