function getCurrentYear() {
    const now = new Date();
    return now.getFullYear();
}

const findTheOldest = function(listOfPeople) {
    return listOfPeople.reduce( (oldestPerson, person) => {
        const ageOfOldestPerson = (!oldestPerson.yearOfDeath ? getCurrentYear() : oldestPerson.yearOfDeath) - oldestPerson.yearOfBirth;
        const ageOfCurrentPerson = (!person.yearOfDeath ? getCurrentYear() : person.yearOfDeath) - person.yearOfBirth;
        if (ageOfOldestPerson < ageOfCurrentPerson) {
            oldestPerson = person;
        }
        return oldestPerson;
    }, listOfPeople[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
