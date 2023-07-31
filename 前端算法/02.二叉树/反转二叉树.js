// https://leetcode.cn/problems/invert-binary-tree/

var invertTree = function(root) {

  // 终止条件
  if(root === null) return root; 

  // 反转
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 递归遍历
  invertTree(root.left);
  invertTree(root.right);

  // 方法二：
  // [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

  return root;
};


var invertTree1 = function(root) {

  if(root === null) return root;

  // 递归遍历
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

