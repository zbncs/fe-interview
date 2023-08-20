// https://leetcode.cn/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const pathName = path.split('/');
    console.log(pathName);
    for(let i = 0; i < pathName.length; i++) {
        if (pathName[i] === '..') {
            stack.pop();
        } else if(pathName[i] && pathName[i] !== '.') {
            stack.push(pathName[i])
        }
    }


  return '/' + stack.join('/');
};


console.log(simplifyPath("/a/./b/../../c/"));


