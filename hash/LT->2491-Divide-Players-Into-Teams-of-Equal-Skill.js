/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    let sum = skill.reduce((a, b) => a + b, 0);

    let teams = skill.length / 2;

    if (sum % teams !== 0) {
        return -1;
    }

    let target = sum / teams;

    let freq = new Map();

    for (let x of skill) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let chemistry = 0;

    for (let [num, count] of freq) {
        let partner = target - num;

        if (!freq.has(partner)) {
            return -1;
        }

        if (freq.get(partner) !== count) {
            return -1;
        }

        chemistry += num * partner * count;
    }

    return chemistry / 2;
};