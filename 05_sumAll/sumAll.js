const sumAll = function(a, b) {

    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    }

    let result = 0;
    let start, end;

    if (a > b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }

    for (i = start; i <= end; i++) {
       result += i; 
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
