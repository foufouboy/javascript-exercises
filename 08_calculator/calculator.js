const add = function(a, b) {

    return a + b;
	
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {

    return arr.reduce((total, n) => total += n, 0);
	
};

const multiply = function(arr) {
    return arr.reduce((total, n) => total *= n, 1);
};

const power = function(a, b) {

    return a ** b
	
};

const factorial = function(n) {

    if (n === 1) {
        return 1;
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
