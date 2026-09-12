function add7(num) {
    return +num + 7;
}

let sum = add7(prompt("Enter a number: "));
console.log(`The result is: ${sum}`);

let multiply = (a, b) => a * b;
let product = multiply(prompt("Enter the first number: "), 
prompt("Enter the second number: "));
console.log(`The product is: ${product}`);

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let capitalizedstring = capitalize(prompt("Enter a string: "));
console.log(capitalizedstring);

function lastletter(str) {
    return str.charAt(str.length - 1);
}

let lastcharacter = lastletter(prompt("Enter a string: "));
console.log(lastcharacter);