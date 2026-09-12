const palindromes = function (word) {
    let array = Array.from(word);
    let indexArray = []
    // check for punction or space
    array.forEach((element,index) =>{
      if(element === `,` || element === `.` || element === ` `){
      indexArray.push(index)
      }
    })
    // remove punction and space from the array
    if (indexArray.length !== 0){
      for(i=indexArray.length; i>0 ; i--){
        array.splice(indexArray[i-1],1)
      }
      // reassign clean array to word variable, for later comparison
      word = array.join('')
      console.log(word)
    }
  
    console.log(array)

    // reverse and compare
    let reverseWord = array
                        .reverse()
                        .join('')
    return word.toLowerCase() === reverseWord.toLowerCase()
  };
  // console.log(palindromes('A nut for a jar of tuna.'))
  let testRun = palindromes(prompt('If you think its a palindrome, then it is not', `A nut for a jar of tuna.`))
  console.log(testRun)
// check for commas with the array
// using the findIndex and Every methods
// store the index of each comma in an indexArray
// open an if state to verify if length of this array not zero
// true -> iterate from the end of indexArray and splice from last to first
// reassign word to this joined of new array

// a reduce could be useful somewhere



// Do not edit below this line
module.exports = palindromes;
