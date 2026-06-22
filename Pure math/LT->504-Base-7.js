var convertToBase7 = function(num) {
    if (num === 0) return "0";

    let isNeg = num < 0;
    num = Math.abs(num);

    let str = [];

    while (num > 0) {
        str.push(num % 7);
        num = Math.floor(num / 7); 
    }

    str.reverse(); 

    return (isNeg ? "-" : "") + str.join("");
};