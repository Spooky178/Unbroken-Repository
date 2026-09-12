const removeFromArray = function(arr,num) {
 let newArr = arr.filter(item => item !== num);
 return newArr;
};
let arr = [1,2,3,4,5];
console.log(removeFromArray(arr, 5));

// Do not edit below this line
module.exports = removeFromArray;
