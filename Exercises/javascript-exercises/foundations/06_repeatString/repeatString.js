const repeatString = function(str,num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let repeatedString = ''
        for (let i = 0; i < num; i++) {
            repeatedString += str
        }
        return repeatedString
    }

};

// Do not edit below this line
module.exports = repeatString;
