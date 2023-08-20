// https://leetcode.cn/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
      使用栈来判断：
          遇到左括号入栈，遇到右括号就和栈中第一个元素出栈对比
          不是 => 返回false
   */
   const stack = [];
   const obj = {
       '(': ')',
       '{': '}',
       '[': ']'
   };

   for(let i = 0; i < s.length; i++) {
       if(s[i] in obj) {
        // 先把所有的正向括号放进去
           stack.push(s[i])
       } else {
           const first = stack.pop();
           if(obj[first] !== s[i]) {
               return false;
           }
       }
   }
   return stack.length === 0;
};
