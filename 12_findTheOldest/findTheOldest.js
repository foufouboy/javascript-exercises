const findTheOldest = function(people) {
    return people.reduce((first, second) => {
        for (let obj of [first, second]) {
            if (!obj.yearOfDeath) {
                obj.yearOfDeath = new Date().getFullYear();
            }
        }
        const firstYears = first.yearOfDeath - first.yearOfBirth;
        const secondYears = second.yearOfDeath - second.yearOfBirth;

        return (firstYears > secondYears) ? first : second;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
