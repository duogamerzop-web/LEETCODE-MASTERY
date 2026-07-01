/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let maxAvg = -Infinity;
    let sum = 0;
    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        if((right - left + 1) === k) {
            maxAvg = Math.max(maxAvg, (sum/k))
            sum -= nums[left];
            left++;
        }
    }
    return maxAvg
};