/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let freq = new Map();
    for (let x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }
    let MaxSum = 0;
    let count = 0;
    for (let [num] of freq) {
        if(num < 0) {
            count++;
            continue;
        }
        MaxSum += num;
    }
    if (MaxSum === 0) {
    MaxSum = nums[0];
    for (let x of nums) {
        if (x > MaxSum) {
            MaxSum = x;
        }
    }
}
    return MaxSum;
};