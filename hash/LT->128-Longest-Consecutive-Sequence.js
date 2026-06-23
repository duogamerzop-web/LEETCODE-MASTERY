/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let current = 0;
    for(let num of set) {
        let count = 0;
        let currNum = num;
        if(!set.has(num - 1)) {
            while(set.has(currNum)) {
                currNum++;
                count++;
            }
        }
        current = Math.max(current, count);
    }
    return current;
};