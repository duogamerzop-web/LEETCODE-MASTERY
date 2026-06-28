/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++) {
        if(i === 0 && arr[i] != 1) {
            arr[i] = 1;
        }
        if(Math.abs(arr[i] - arr[i - 1]) > 1) {
            arr[i] = arr[i - 1] + 1;
        }
    }
    return Math.max(...arr);
};