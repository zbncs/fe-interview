// https://leetcode.cn/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const stack = s.split(' ').filter(it => {
        if (it !== '') {
            return it.trim()
        }
    })

    const res = []

    while (stack.length) {
        res.push(stack.pop())
    }

    return res.join(' ')
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
