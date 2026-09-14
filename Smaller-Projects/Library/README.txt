What I learned :
Buttons can be hard, let me explain
-The delete buttons created not only do not responded to click but 
    also did appear as null when queried for in the console
-What should be done instead :
    The event listener is to be refreshed everytime a new card is added?
    This was the conclusion after pasting eventlistener function 
        into the console and clicking on the button.
    What to look for now? 
        Is this behavior natural? 
        Is there a method to refresh part of the code?


Refer any useful or remember worthy note here

What I praticed :

Forms(Validations will come in handy)
Pseudo Classes
Assembling HTML JAVASCRIPT and CSS altogether, connecting the dots
NEW - Dialog boxes and DOM manipulation of form controls -> javascript 


Dialog box :

Imagine a singular object with properties title, author, etc...
Each property then queries for its related input
Store the value of each input inside the object
On click check for empty properties, if empty return an error message
- Could use form valitdation here

There is also a reset function to remove previously filled fields
There is a function call to add a book in library upon submit a valid form
As convention, all input IDs are similar to arguments of functions

Fix : delete buttons now work
    Using properties of bubbling, I learned event delegation
    Use of target needs to be looked into more but i have a baseline grasp of it
    cards are delete from screen and library array

Style : Main color theme frost blue