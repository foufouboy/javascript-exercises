function isAlphaNumeric(str) {
  let code, i;

    code = str.charCodeAt(0);
    if (!(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }

  return true;
};

const palindromes = function (string) {

    let newString = string.split("").filter(isAlphaNumeric).join("").toLowerCase();
    let start = 0,
        end = newString.length - 1;

    while (start < end) {
        if (newString[start] !== newString[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;

};


// Do not edit below this line
module.exports = palindromes;
