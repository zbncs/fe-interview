// https://leetcode.cn/problems/symmetric-tree/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

  function fn(l, r) {
      if (l === null && r === null) {
          return true
      } else if (l === null || r === null) {
          return false
      } else if (l.val !== r.val) {
          return false
      } else {
          return fn(l.left, r.right) && fn(l.right, r.left)
      }
  }

  return fn(root.left, root.right)
};