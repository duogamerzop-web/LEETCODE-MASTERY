/**
 * @param {number[]} nums
 * @return {number}
 */
var iffrequencyisone = function(nums, x) {
    let freq = new Map();

    for (let i = x; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    for (let count of freq.values()) {
        if (count !== 1) {
            return false;
        }
    }

    return true;
};

var minimumOperations = function(nums) {
    let operations = 0;
    let start = 0;

    while (start < nums.length) {
        if (iffrequencyisone(nums, start)) {
            return operations;
        }

        start += 3;
        operations++;
    }

    return operations;
};