/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let cost = 0;
    let n = 0;
    let freq = new Map;
    for(let ch of word) {
        freq.set(ch, (freq.get(ch) || 0) + 1); 
    }
    let counts = [...freq.values()];
    counts.sort((a, b) => b - a);
    for(let count of counts) {
        if(n < 8) {
            cost += count * 1;
        } else if(n >= 8 && n < 16) {
            cost += count * 2;
        } else if(n >= 16 && n < 24) {
            cost += count * 3;
        } else {
            cost += count * 4;
        }
        n++;
    }
    return cost;
};