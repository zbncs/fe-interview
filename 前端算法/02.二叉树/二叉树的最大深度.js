// https://leetcode.cn/problems/maximum-depth-of-binary-tree/

var maxDepth = function(root) {
  // 二叉树最常用的就是递归

  if(root === null) return 0;

  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};


