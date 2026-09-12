// -------GRID PANEL--------//

Imagine a square of length x.
For a number of squares n
Declare a length variable of x divided by n
Set the height and width of length variable
Place all the squares in the container

Note : set margin of squares to 0px//set padding of container div to 0px

Keep in mind? - Prevent square from overflowing..... Maybe flex would,
                be easier.
                Make each grid grow to its max size and wrap through
                the container div.

                DO Set initial length of container
Initial approach - Append child grids to container and make it wrap
                   Set exact length for each square to fit the square 
                   NOTE : This works



// ---------HOVER EFFECT -------- //

Declare a global variable called isHovered, 
 this will change when a grid div is hovered
Store -all- the grids in a node list called gridList
Add an event listener for each grid
When mouse enters change the background color and then set isHovered to true
If mouse enters a grid which has been hovered, increase its opacity and do not change the color


// ------ User Input ------ //

Input element + Submit button
Set value of global variable gridCount to input value
There is an event listener somewhere

>Create an input element and assign it to input
Set the class to input
Create a button and assign it to btn
Set the class to Submit

Additionally :
              Clear container div
              Add an event listener to button
              Set the value of gridCount to equal the text content of input
              Reset text content of input
              Run createGrid function using gridCount as parameter 

// ----- Reset Session ----- //


