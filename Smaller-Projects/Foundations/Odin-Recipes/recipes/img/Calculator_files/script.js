// ---- Global Variables ---- //
let firstNum;
let secondNum;
let operatorSign;
let p = document.querySelector(`.text`);
let isDecimalAllowed=true;


// ---- Arrays for button creation ---- //
const digitArray = [
    { Class: `equate`, Id: `=` },
    { Class: `decimal`, Id: '.' },
    { Class: `digit`, Id: 0 },
    { Class: `digit`, Id: 1 },
    { Class: `digit`, Id: 2 },
    { Class: `digit`, Id: 3 },
    { Class: `digit`, Id: 4 },
    { Class: `digit`, Id: 5 },
    { Class: `digit`, Id: 6 },
    { Class: `digit`, Id: 7 },
    { Class: `digit`, Id: 8 },
    { Class: `digit`, Id: 9 },
]
const operatorArray = [
    { Class: `operator`, Id: `*` },
    { Class: `operator`, Id: `+` },
    { Class: `operator`, Id: `-` },
    { Class: `operator`, Id: `/` },
    { Class: `delete`, Id: `Del` },
    { Class: `reset`, Id: `AC` },
]

// ---- Lower Screen Creation ---- //
function createScreen(screen, array, height, width) {
    for (let i = array.length - 1; i > -1; i--) {
        let myClass = array[i].Class
        let myId = array[i].Id
        let btn = createButton(myClass, myId)
        btn.style.height = `${height}px`
        btn.style.width = `${width}px`
        btn.textContent = myId
        // call for named append function 
        appendButton(screen, btn)

    }
}
// ---- Button creation ---- //
function createButton(myClass, myId) {
    let btn = document.createElement(`button`)
    btn.setAttribute(`class`, myClass)
    btn.setAttribute(`id`, myId)
    return btn
}

// ---- Append Function ---- //
function appendButton(screen, button) {
    if (screen.getAttribute(`id`) === `digit`) {
        digitScreen.appendChild(button)
    } else if (screen.getAttribute(`id`) === `operator`) {
        operatorScreen.appendChild(button)
    }
}

// What is the space available to add a button
const digitScreen = document.querySelector(`#digit`)
const operatorScreen = document.querySelector(`#operator`)
let btnWidth = (digitScreen.offsetWidth / 3) * 0.8
let btnHeight = (digitScreen.offsetHeight / 4) * 0.8

createScreen(digitScreen, digitArray, btnHeight, btnWidth)
createScreen(operatorScreen, operatorArray, btnHeight, btnWidth)

// spacing buttons
let gap = divide(substract(digitScreen.offsetHeight, multiply(btnHeight, 4)), 4)
digitScreen.style.rowGap = `${gap}px`
operatorScreen.style.rowGap = `${gap}px`


// ----- 4operators ----- //
function add(a, b) { return a + b }
function substract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
// ---- operate ---- //
function operate(operator, a, b) {
    let val;
    switch (operator) {
        case '+':
            val = add(a, b); break;
        case '-':
            val = substract(a, b); break;
        case '*':
            val = multiply(a, b); break;
        case '/':
            val = divide(a, b); break;
    }
    if(checkDot(`${val}`)){
        val = roundDecimal(val)
    }
    return val
}

// ---- Decimal Logic ---- //
// Rework needed
// function checkDecimal(val){
//     let array = `${val}`
//     array = Array.from(array)
//     let decimalAt = array.indexOf(`.`)
//     return decimalAt
// }
// // function roundDecimal(array,index){
// //     if(array[index+1]>4){
// //         array[index] += 1
// //     }
// //     array.length = index + 1
// //     return array
// // }
// function setDecimal(val){
    
//     let array = `${val}`
//     array = Array.from(array)
//     let roundAt = checkDecimal(val) + 2
//     if(array.length > roundAt+1){
//         roundDecimal(array, roundAt)
        
//     };
//     return array.join('')
// }

function roundDecimal(val){
    let whereDot = `${val}`.split('.')
    if(whereDot[1].length > 4){
        val = Math.round(val * 10 ** 4)/10**4
    }
    return val
}

// ---- Digit Button ---- //
let digitButton = document.querySelectorAll(`.digit`)
digitButton.forEach((currentButton, index) => {
    currentButton.addEventListener(`click`, function () {
        p.textContent += currentButton.id;
    })
})


// ---- Operator Buttons, verification and validation ---- //
let operatorButton = document.querySelectorAll(`.operator`)
operatorButton.forEach((currentButton, index) => {
    currentButton.addEventListener(`click`, function () {
        let sign = currentButton.id
        if(isEdit(sign)){
                editOperator(sign)
        } else if(preventOperator() === false){
                addOperator(sign)
        };
    });
});

function checkOperator(str){
    let list = [ `+` , `-` , `/` , `*`,]
    return list.some(char => str.includes(char))
}

// Added - dismantle operator button using 3 functions : add, edit, prevent operator

function addOperator(sign){
    operatorSign = sign;
    p.textContent += ` ${operatorSign} `
};
function isEdit(sign){
    let text = p.textContent.split(' ')
    let list = [ `+` , `-` , `/` , `*`,]
    let isEdit = false
    // if the second element of paragraph array is not empty
    if(text[2] !== ''){
        equateOperator()
        return isEdit
    }
    // if there is an operator at the second element of paragraph array
    isEdit = checkOperator(text[1])
    return isEdit
};
function editOperator(sign){
    let text = p.textContent.split(' ')
        // text.pop()
        // text.pop()
        p.textContent = text[0]
    return addOperator(sign)
};

function preventOperator(){
    let isPrevent = false
    let text = p.textContent
    // if it is empty
    if (text === '') {
            isPrevent = true
    } else{
        // if it contains an operator already
        for(let i = text.length -1;i>0;i--){
            if(checkOperator(text[i])){
                isPrevent = true
            }
        };
    };
    return isPrevent
};


// ---- Equal sign ---- //
// added if text hold values run, else nothing
let equate = document.querySelector(`.equate`)
equate.addEventListener(`click`, function () {
    equateOperator()

})

function equateOperator(){
    let text = p.textContent
    text = text.split(' ')
    if (text[0] && text[2]) {
        firstNum = +text[0]
        secondNum = +text[2]
        operatorSign = text[1]
        let result = operate(operatorSign, firstNum, secondNum)
        p.textContent = result
    }
}
// ----- Reset AC ---- //
let resetButton = document.querySelector(`.reset`)
resetButton.addEventListener(`click`, function () {
    reset()
})
function reset() {
    p.textContent = ''
    firstNum = ''
    secondNum = ''
    isDecimalAllowed = true
}

// ---- Backspace Button ---- //
let del = document.querySelector(`.delete`);
del.addEventListener(`click`, function(){
    let text = p.textContent.split('');
    let lastIndex = p.textContent.length - 1
    console.log(text[lastIndex])
    
    // if empty return
    if(lastIndex === -1){
        return
    }
    // if space, delete space -> operator -> space
    if(text[lastIndex] === ` `){
        for(let i = 3;i!== 0;i--){
            text.pop()
            lastIndex -= 1
        }
    } else{
        text.pop()
    }
    
    p.textContent = text.join('')
});



// ------ Decimal Button logic ------ //
function checkDot(text){
    return text.includes(`.`)?true:false;
}

function setCurrent(){
    let text = p.textContent.split(' ')
    return text[1]?text[2]:text[0];
    // if there is an operator,return second element else first element
}
function isEmpty(currentText){
    return (currentText === '')
}

let decimal = document.querySelector(`.decimal`)
decimal.addEventListener(`click`, function(){
    isDecimalAllowed = !(checkDot(setCurrent()))
    if(isDecimalAllowed){
        if(isEmpty){
        p.textContent += `0.`
        } else{
            p.textContent += `.`
        };
    };
});

// I will now attempt keyboard support
function checkKeydown(key, array){
    let bool = false
    array.forEach((current, index)=> {
        if(key === `${current.Id}`){
            bool = true
            return
        }
    })
    return bool
}
function clickButtonKeyboard(key){
    const button = document.getElementById(key)
    button.click()
}

let key = document.addEventListener(`keydown`, function(keydown){
    let nestedKey = keydown.key
    console.log(nestedKey)
    if (checkKeydown(nestedKey, digitArray) || 
    checkKeydown(nestedKey,operatorArray)){
        clickButtonKeyboard(nestedKey)
    }
    // if(nestedKey = `Enter`){
    //     clickButtonKeyboard(`=`)
    // }

});