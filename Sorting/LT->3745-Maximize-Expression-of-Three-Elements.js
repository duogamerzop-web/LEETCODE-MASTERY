/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    nums.sort((a, b) => a - b);
    return (nums[nums.length - 1] + nums[nums.length - 2] - nums[0]);
};