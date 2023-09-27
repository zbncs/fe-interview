// https://leetcode.cn/problems/word-search/

/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    if (board.length === 0) {
        return false
    }
    if (word === '') {
        return true
    }

    let row = board.length
    let col = board[0].length

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let res = back(i, j, 0)

            if (res) {
                return res
            }
        }
    }

    return false

    function back(i, j, curr) {

        if (i >= row || i < 0) {
            return false
        }

        if (j >= col || j < 0) {
            return false
        }

        let it = board[i][j]

        if (it !== word[curr]) {
            return false
        }

        if (curr === word.length - 1) {
            return true
        }

        board[i][j] = null // 表示已经查找过了

        const ret = back(i, j + 1, curr + 1)
            || back(i, j - 1, curr + 1)
            || back(i - 1, j, curr + 1)
            || back(i + 1, j, curr + 1)

        board[i][j] = it

        return ret
    }
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE'))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'))


