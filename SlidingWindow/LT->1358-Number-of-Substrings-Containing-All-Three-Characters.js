/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    let right = 0;
    let left = 0;
    let count = 0;
    let freqA = 0;
    let freqB = 0;
    let freqC = 0;
    while(right < n) {
        if(s[right] === 'a') {
            freqA++;
        } else if(s[right] === 'b') {
            freqB++;
        } else if(s[right] === 'c') {
            freqC++;
        }

        while(freqA > 0 && freqB > 0 && freqC > 0) {
            count += n - right;
            if(s[left] === 'a') {
                freqA--;
                left++;
            } else if(s[left] === 'b') {
                freqB--;
                left++;
            } else if(s[left] === 'c') {
                freqC--;
                left++;
            }
        }
        right++;
    }
    return count;
};