/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    let map = new Map();
    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            ans = Math.min(ans, i - map.get(nums[i]));
        }

        let num = nums[i];
        let rev = 0;

        while (num > 0) {
            rev = rev * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        map.set(rev, i);
    }

    return ans === Infinity ? -1 : ans;
};