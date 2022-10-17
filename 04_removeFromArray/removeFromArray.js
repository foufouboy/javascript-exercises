const removeFromArray = function(arr) {

    const args = Array.from(arguments).slice(1);

    for (let arg of args) {
        arr = arr.filter((item) => item !== arg);
    }

    return arr;

};


// Do not edit below this line
module.exports = removeFromArray;
