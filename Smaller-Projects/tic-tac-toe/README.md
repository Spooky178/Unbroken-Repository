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
