// https://leetcode.cn/problems/longest-common-prefix/description/

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 输入：strs = ["a","a","b"]
// 输出：""


const longestCommonPrefix = (strs) => {
    let res = strs[0]

    for (let i = 1; i < strs.length; i++) {
        const it = strs[i]
        let k = -1

        for (let j = 0; j < it.length; j++) {
            if (res[j] !== it[j]) {
                break
            }
            k = j
        }
        res = k === -1 ? '' : res.slice(0, k+1)
    }

    return res
}

console.log(longestCommonPrefix(["a","a","b"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))


