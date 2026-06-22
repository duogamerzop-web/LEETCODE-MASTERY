/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    let fuel = mainTank;
    let distance = 0;
    while(fuel >= 5) {
        distance += 50;
        fuel -= 5;
        if(additionalTank >= 1) {
            fuel++;
            additionalTank--;
        }
    }
    if(fuel > 0) {
        distance += fuel * 10;
    }
    return distance;
};