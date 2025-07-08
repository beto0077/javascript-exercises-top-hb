function isValidNumber(number) {
    const isNumber = typeof number === "number" && Number.isFinite(number);
    return isNumber && Number.isInteger(number) && number >= 0;
}
function sumWithinRange(num1, num2) {
    let total = 0;
    for (let index = num1; index <= num2; index++) {
        total += index;
    }
    return total;
}
const sumAll = function (num1, num2) {
    if (isValidNumber(num1) && isValidNumber(num2)) {
        return num1 < num2 ? sumWithinRange(num1, num2) : sumWithinRange(num2, num1);
    } else {
        return `ERROR`;
    }
};

// Do not edit below this line
module.exports = sumAll;