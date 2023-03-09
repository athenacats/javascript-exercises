const fibonacci = function(number) {
    if (typeof number === "string") {
        number = parseInt(number)
    }
    if (number < 0) {
        return'OOPS';
    }
    let sum = 0;
    let a = 0;
    let b = 1;
    for (i = 1; i < number; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
