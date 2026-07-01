/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let left, right;
    let n = code.length;
    let ans = [];
    if(k === 0) {
        for(left = 0; left < n; left++) {
            ans.push(0);
        }
    }
    if(k > 0) {
        for(left = 0; left < n; left++) {
            let sum = 0;
            right = (left + 1) % n;
            let count = 0;
            while(count < k) {
                sum += code[right];
                right = (right + 1) % n;
                count++;
            }
            ans.push(sum);
        }
    }
    if(k < 0) {
        k = -1 * k;
        for(right = 0; right < n; right++) {
            let sum = 0;
            left = (right - 1 + n) % n;
            let count = 0;
            while(count < k) {
                sum += code[left];
                left = (left - 1 + n) % n;
                count++;
            }
            ans.push(sum);
        }
    }
    return ans;
};