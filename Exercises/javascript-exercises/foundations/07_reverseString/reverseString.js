const reverseString = function(word) {
    let reversed = ``
    for (let i = word.length - 1; i >=0; i--)
        reversed += word[i]
    console.log(reversed)
    return reversed 
};

let word = `hello there ereht olleh`
reverseString(word)

// Do not edit below this line
module.exports = reverseString;
