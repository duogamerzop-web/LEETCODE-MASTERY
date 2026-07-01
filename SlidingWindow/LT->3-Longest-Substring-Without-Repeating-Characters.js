/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    let freq = new Array(128).fill(0);
    let count = 0;
    for(let right = 0; right < s.length; right++) {
        freq[s[right].charCodeAt(0)]++;
        while(freq[s[right].charCodeAt(0)] > 1) {
            freq[s[left].charCodeAt(0)]--;
            left++; 
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};