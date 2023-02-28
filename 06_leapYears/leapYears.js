//the order of code matters!!
//if you dont start with the century function and start with the % 4 instead,
//it will return non-leap century years as true

const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 != 0 ){
        return false;
    } if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
