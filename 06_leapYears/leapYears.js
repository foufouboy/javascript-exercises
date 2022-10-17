const leapYears = function(year) {

    function isDivisibleBy(divisor, n) {
        return n % divisor === 0;
    }

    if (isDivisibleBy(4, year)) {
        if (isDivisibleBy(100, year)) {

            if (isDivisibleBy(400, year)) {

                return true;
            } 

            return false;
        } 

        return true;
    }
    
    return false;
    
};

console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
