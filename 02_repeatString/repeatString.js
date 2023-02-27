const repeatString = function(str, num) {
//By my understanding, you declare a blank string ''. Its empty because
//the conditions that you input in the curly brackets will determine what the
//outcome is. num is going to be the number, so it can be compared with i
//+= adds the item to the left to that on the right;
//ie string = string + str. so if str is hey;
// if i = 0,  string = '' + 'hey
// i = 1      string = 'hey' + 'hey'
// i =        string = 'heyhey' + 'hey' etc
    let string = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        string += str;
    } 
    return string;
}
 


// Do not edit below this line
module.exports = repeatString;
