/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0;
    let maxAltitude = 0;

    for(let i = 0; i < gain.length; i++) {
        sum += gain[i];
        gain[i] = sum;

        if(gain[i] > maxAltitude) {
            maxAltitude = gain[i];
        }
    }

    return maxAltitude;
};