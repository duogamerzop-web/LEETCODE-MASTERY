/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var generate = function(k) {
    let res = [""];
    for(let i = 0; i < k; i++) {
        let temp = [];
        for(let str of res) {
            temp.push(str + "0");
            temp.push(str + "1");
        }
        res = temp;
    }
    return res;
};
// this got failed at 192/201 cases
var hasAllCodes = function(s, k) {
    let set = new Set;
    for(let i = 0; i <= s.length - k; i++) {
        set.add(s.slice(i, i + k));
    }
    if(set.size === 2 ** k) {
        return true;
    }
    
    return false;
};
//passed all 201 cases