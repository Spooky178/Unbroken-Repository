
const fibonacci = function(position){
      const initial = 1
      let array = [initial,initial]
      // array.length = position
      if (position <= 2){
        return initial
      }
      for(let i = 1;i<position-1;i++){
      array.push(array[i-1]+array[i])
      }
      console.table(array)
      return array[position-1]
};
    
    console.log(fibonacci(prompt('Enter a number ONLY', 5)))

// Do not edit below this line
module.exports = fibonacci;
