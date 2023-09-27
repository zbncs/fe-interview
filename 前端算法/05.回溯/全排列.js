// https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = [];
  const temp = [];

  const fn = (temp, nums) => {
      if (temp.length === nums.length) {
          res.push([...temp]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (temp.indexOf(nums[i]) > -1) continue;

          // 先放进去
          temp.push(nums[i]);
          // 在执行一遍
          fn(temp, nums);
          // 再拿出来
          temp.pop();
      }
  }

  fn(temp, nums);

  return res;
};
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
const nums = [1,2,3];
permute(nums);

