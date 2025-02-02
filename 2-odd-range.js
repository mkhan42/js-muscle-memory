/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let oddsArr = new Array();

    for (i = 0; i <= end; i++) {
        if(i % 2 !== 0) {
            oddsArr.push(i);
        }
    }
    return oddsArr;
}

console.log(oddRange(13));
console.log(oddRange(6));
