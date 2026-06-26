/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const freq = new Map();

    const words = (s1 + " " + s2).split(" ");

    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    const ans = [];

    for (const [word, count] of freq) {
        if (count === 1) {
            ans.push(word);
        }
    }

    return ans;
};