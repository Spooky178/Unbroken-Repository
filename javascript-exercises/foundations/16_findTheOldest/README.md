# Exercise 16 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

## Hints

- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

<!-- Pseudo -->

* Declare an array of objects which has two or three nodes namely
        Year of Birth
        Year of death
        Name
* What could reduce be used for?
    - Calc age
    - Assign the total/obj argument to be the highest value
    - Compare the index to total/obj, and store or dismiss accordingly
    - Return the object with the highest value, NOT the value in of itself
* Date function - declare a variable currentDate as new Date() and getFullYear converts into year 
E.G ;  ${date = new Date().getFullYear()}
* In the case where yearOfDeath if Nan then use currentDate instead to calc age
* 





