const palindromes = function (str) {
    return str == str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;


/*const splitStr = string.toLowerCase().replace(/[^a-z]/g, "").split('');
    const revStr = splitStr.reverse();
    const joinStr = revStr.join('');
    if (string != joinStr) {
        return true;
    }
    else {return false;}*/
