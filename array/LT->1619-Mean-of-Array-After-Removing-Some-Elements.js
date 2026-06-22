/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a, b) => a - b);
    let s = 0.05 * arr.length;
    let sum = arr.slice(s, arr.length - s).reduce((a, b) => a + b, 0);
    return sum / (arr.length - 2 * s);
};