const palindromes = function (stringToEvaluate) {
    const filteredString = stringToEvaluate.toLowerCase().match(/[a-zA-Z0-9]/g);
    let isPalindrome = true;
    let indexBack = filteredString.length - 1;
    for (let indexForward = 0; indexForward < filteredString.length; indexForward++) {
        if (filteredString[indexForward] === filteredString[indexBack]) {
            // console.log(`indexF:${indexForward} => ${filteredString[indexForward]} === indexB:${indexBack} => ${filteredString[indexBack]}`);
            // console.log(isPalindrome);
            indexBack--;
        } else {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
