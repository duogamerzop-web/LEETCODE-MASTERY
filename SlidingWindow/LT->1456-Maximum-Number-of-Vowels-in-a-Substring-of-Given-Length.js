/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0;
    let maxVow = 0;
    const vowels = new Set(['a','e','i','o','u']);
    let count = 0;
    for(let right = 0; right < s.length; right++) {
        if(vowels.has(s[right])) {
            count++;
        }
        if((right - left + 1) === k) {
            maxVow = Math.max(maxVow, count);
            if(vowels.has(s[left])) {
                count--;
            }
            left++;
        }
    }
    return maxVow;
};
