const sumAll = function(lower, upper) {

// use a lower and upper bound as arguments and swap them if lower is greater than upper
if(!lower > 0 || !upper > 0) {
    return "ERROR";
}
if (lower > upper) {
    [lower, upper] = [upper, lower];
}

// use a for loop to iterate through the range and sum the numbers
let total = 0;  
for(lower = lower; lower <= upper; lower++) {
    total += lower;
}
// set the for loop to start at the lower bound and end at the upper bound
// suming the numbers goes like this, total+ lower and increment lower
// exit the for loop and display total

};

// alternate answer : using an array to store the range of numbers
// and then use the reduce method to sum the numbers in the array

const sumAllArr = function(lower, upper) {
    if(!lower > 0 || !upper > 0) {
        return "ERROR";
    }
    if (lower > upper) {
        [lower, upper] = [upper, lower];
    }
    let rangeArr = [];
    for (let i = lower; i <= upper; i++) {
        rangeArr.push(i);
    }
    return rangeArr.reduce((acc, curr) => acc + curr, 0);
}

// Do not edit below this line
module.exports = sumAll;
