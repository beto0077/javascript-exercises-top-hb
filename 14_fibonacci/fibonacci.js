const fibonacci = function(number) {
    let filteredNumber = Number(number);
    if (filteredNumber <= 1) {
        return filteredNumber < 0 ? "OOPS" : filteredNumber;
    }
    return fibonacci(filteredNumber-1) + fibonacci(filteredNumber-2);
};

// Do not edit below this line
module.exports = fibonacci;
