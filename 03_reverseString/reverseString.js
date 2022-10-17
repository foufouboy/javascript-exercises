const reverseString = function(string) {

    const stringLetters = string.split('');
    let reversedWord = "";

    for (let i = stringLetters.length - 1; i >= 0; i--) {
        reversedWord += stringLetters[i];
    }

    return reversedWord;

};


// Do not edit below this line
module.exports = reverseString;
