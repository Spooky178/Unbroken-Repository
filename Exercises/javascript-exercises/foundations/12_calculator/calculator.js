const add = function(arg1,arg2){
  return arg1 + arg2
};

const subtract = function(arg1,arg2) {
	return arg1 - arg2
};

const sum = function(array) {
	return array.reduce((a,b)=>{
    return a + b
  },0);
};

const multiply = function(array) {
  return array.reduce((a,b)=>{
    return a * b
  },1);
};

const power = function(base,exponent) {
  return base ** exponent
	
};

const factorial = function(number) {
  let array = []
  for(let i = 1;i<= number;i++){
    array.push(i)
  }
  // console.table(array)
  return multiply(array)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
