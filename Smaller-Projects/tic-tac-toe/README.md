This is a Tic Tac Toe project

What I expect to practice : 
Private Variables
Closures
Nested Functions
Scooping scope
Organizing code in such a way that editting should not be hard

How I expect the program to look like TOP-DOWN :
Tic Tac Toe can be broken into two main cat - Board and Controller

GameBoard: 
    - Handles board and cell creation
    - Handles adding of new X or O
    - Handles disallowed placement
    - For starters console.log the board each round

Controller:
    - PlayRound has smaller functions itself
        - Player turn handling -> switching and not if disallowed
        - For starters console.log each players turn
    - Player init

// To play in console
const controller = Controller()
const game = controller.playRound()
// Use game.play(row,col)

<!-- ============================================== -->
                GEMINI QUESTIONS :
Initial Prompt ->

    Cant I return variable instead of function  when using closure?
    Here is the case
    i have a board function and a controller one, There is a isWon variable inside board func. Variable that did not return anything in the controller function but magically worked when i wrote a function(const declared to a function) called getIsWon 
    as if isWon variable id not get updated when the value changed after game iterations



Gemini answer ->
    The short answer is yes, you can return a variable, but primitive variables (like booleans, numbers, and strings) are passed by value, not by reference.

    When you returned the isWon variable directly, you were returning a snapshot of its value at the exact moment the return statement ran (e.g., false). When isWon changed to true later during game iterations, the variable already handed off to your controller wasn't updated because it was holding that old primitive value.

Gemini answer -> Alternative to what I did -
    function createBoard() {
    const state = { isWon: false };

    function updateGame() {
        state.isWon = true;
    }

    return { state, updateGame };
    }

    const board = createBoard();
    console.log(board.state.isWon); // false
    board.updateGame();
    console.log(board.state.isWon); // true

<!-- ============================================== -->
