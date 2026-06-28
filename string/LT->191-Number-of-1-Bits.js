/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let ones = n.toString(2);
    let count = 0;
    for(let ch of ones) {
        if(ch === '1') {
            count++;
        }
    }
    return count;
};