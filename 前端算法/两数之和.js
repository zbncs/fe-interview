/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */

function twoSum(nums, target) {
    const mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        const el = target - nums[i];
        if (mp.has(el)) {
            return [mp.get(el), i];
        }
        mp.set(nums[i], i);
    }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));


