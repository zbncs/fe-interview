// https://leetcode.cn/problems/evaluate-reverse-polish-notation/

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
