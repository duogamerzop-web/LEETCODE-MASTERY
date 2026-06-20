/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = new Map();
    for(let x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }
    let maxfreq = 0;
    for(let count of freq.values()) {
        maxfreq = Math.max(maxfreq, count);
    }
    let cnt = 0;
    for(let count of freq.values()) {
        if(count === maxfreq) {
            cnt++;
        }
    }
    return cnt * maxfreq;

};