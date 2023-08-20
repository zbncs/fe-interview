// https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const temp = [];

  const fn = (temp, nums) => {
      if (temp.length === nums.length) {
          res.push([...temp]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (temp.indexOf(nums[i]) > -1) continue;
          
          temp.push(nums[i]);
          fn(temp, nums);
          temp.pop();
      }
  }

  fn(temp, nums);

  return res;
};
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
const nums = [1,2,3];
permute(nums);

