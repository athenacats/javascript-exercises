function removeFromArray() {
    const myArray = arguments[0];
    for ( let i = 1; i < arguments.length; i++) {
        const index = (myArray.indexOf(arguments[i]));
        if (index > -1) {
            myArray.splice(index, 1);
        }
    }
    return myArray;
}


// check https://www.programiz.com/javascript/examples/remove-array-item for clear examples

//const removeFromArray = function(array, position) {
    //const index = array.indexOf(position);
    // if index is in the array, remove it
    //remember index starts at 0, so that means in that number is in the
    //array, its index is going to be > -1
    //if (index > -1) {
        //array.splice(index, 1);
    //}
    //return array;
//};

//other method
//function removeFromArray(array, position) {
    //const newArray = [];

    //for ( let i = 0; i < array.length; i++) {
        //if(array[i] !== position) {
            //newArray.push(array[i]);
        //}
    //}
    //return newArray;
//}

// Do not edit below this line
module.exports = removeFromArray;
