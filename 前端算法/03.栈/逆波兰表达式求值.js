// https://leetcode.cn/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN1 = function(tokens) {
    let i = 0

    function getSymbol(l, s, r) {
        if (s === '-' && r < 0) {
            return `${l}+${Math.abs(r)}`
        } else if (s === '+' && r < 0) {
            return `${l}${r}`
        } else if (l < 0 && (s === '*' || s === '/') && r < 0) {
            return `${Math.abs(l)}${s}${Math.abs(r)}`
        } else if (l > 0 && (s === '*' || s === '/') && r < 0) {
            return `-${Math.abs(l)}${s}${Math.abs(r)}`
        }

        return `${l}${s}${r}`
    }

    while (i < tokens.length) {
       if (isNaN(parseInt(tokens[i]))) {
           const res = eval(getSymbol(parseInt(tokens[i-2]), tokens[i], parseInt(tokens[i-1])))
           tokens.splice(i-2, 3, parseInt(res))
           i -= 2
       } else {
           i++
       }
    }

    return tokens[0]
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const obj = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => parseInt(b / a),
    }

    let stack = []

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] in obj) {
            stack.push(obj[tokens[i]](stack.pop(), stack.pop()))
        } else {
            stack.push(parseFloat(tokens[i]))
        }
    }

    return stack[0]

};

console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
