/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {

    let dx = coordinates[1][0] - coordinates[0][0];
    let dy = coordinates[1][1] - coordinates[0][1];

    for(let i = 2; i < coordinates.length; i++) {
        if(dy * (coordinates[i][0] - coordinates[0][0]) !==
            (coordinates[i][1] - coordinates[0][1]) * dx) {
            return false;
        }
    }
    return true;
};