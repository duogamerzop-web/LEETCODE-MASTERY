/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let count = 0
    let con = 0;
    for(let x in s) {
        if(s[x] === 'A') {
            count++;
        }
        if(s[x] === 'L') {
            con++;
            if(con > 2) {
                return false;
            }
        } else {
            con = 0;
        }

    }
    if(count > 1) {
        return false;
    }
    return true;
};