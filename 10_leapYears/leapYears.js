const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
};

//Improved version after reviewing documentation on the subject.
const leapYearsImproved = year => (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));


// Do not edit below this line
module.exports = leapYears;
