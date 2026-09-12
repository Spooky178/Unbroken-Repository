# WHAT I PRACTICED

Breaking down a problem into smaller, simpler functions.

Navigating parts of a paragraph elements.

Using booleans as togglers.

Creating html element while assigning class and id from object properties.

* Knowing  how to read errors is useful
I tried reassigning a const 

* Worked with offsetWidth to fetch
width of screen divs
For some reason .style.width returned
null, p.s - look more into it


# BUILT WITH

HTML
CSS(Flexbox)
Javascript(Arrays, DOM manipulation, Functions, Objects)

# Ideas to improve

Add a power 10 button that uses a new operator sign -> ^

Add visual elements, nav bar, footer, side notes or history

// !--- Global Variables --- //

firstNum
operatorSign
secondNum


// !--- 4operator Functions --- //

A function add that takes two parameters, return that sum of both

A function substract that two parameters, return their substraction

A function multiply that takes two parameters, return their product

A function divide that takes two parameters, return their fraction

// !--- Funtion operate --- //

Function operate with 3 parameters(operatorSign, firstNum, secondNum)
Case select the operatorSign to hard coded string
    Call operator function accordingly
return operator function

// !--- Button creation Logic --- //

Since I have two screens, each screen will have
screen constant, array of objects, height and width [take as parameters]

Create a new instance of a button
Assign its height and width
Assign its class and id
Append it to the correct screen

// Digit button sizing logic

Create 2 variables for height and width
    The digit part has 4 rows and 3 columns
Set the variable to be 80% of calculated height and width


// ----- Make a button work ---- //

Add an event listener to a button on click
Change text Content of display accordingly

        #Issues I came accros

* Allow multiple digits to be entered
    Declare a temporary variable that will update the display
    Use firstNum or secondNum only to equate

* Prevent an operator to be entered more than once
    operator can be entered multiple times
    Can prevent it from being entered more than once
    But it does not change to last operator entered

*Rounding numbers 
    Only when there is a decimal greater than 2 decimal points

        #Issues I resolve and how

* Allow multiple digits to be entered
    Read the text content of p
    Split into a 3 of length array and re assign global Variables

* Prevent an operator to be entered more than once
    Declare a boolean variable isOperatorAllowed
    Set it to false when an operator button is clicked
    Set it to true when equate is clicked
    To make operator change on display
        convert text content to array
        pop the last two array elements
* Rounding numbers
    Check if there is a dot
    Call the roundDecimal Function
    Check for more than 4 decimal place
    Round to 4 dp

I am not adding key board support
~Keyboard support :

Check whether a key matches to buttons on screen
    It should return true
A function that retrive the correct button and clicks it

~Handling zero division :

A function that verifies if val is infinity
    Display an error mesaage
    Make it so that any click at this point resets the display






