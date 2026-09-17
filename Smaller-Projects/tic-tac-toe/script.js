// Making cell logic first so as to populate gameboard 2D array
function Cell(){
    let value = 0
    const setTag = (player)=>{
            value = player
    }
    const getValue = () => value
    return{setTag, getValue}
}
function Gameboard(){
    // Creating a 2d array using nested loop
    // Each individual cell can getValue and setTag
    const rows = 3
    const columns = 3
    let board = []
    for(let i = 0;i<rows;i++){
        board[i]=[]
        for(let j =0;j<columns;j++){
            board[i].push(Cell())
        }
    }
    const placeTag = (row,col,player)=>{
            board[row][col].setTag(player)
    }
    const isCellAvailable = (row,col)=>{
        let available = false
        if(board[row][col].getValue() === 0){
            available = true
        }
        return (available)
    }
    const printBoard = () =>{
        let boardState;
        for(let i =0;i < 3;i++){
            boardState = ''
            for(let j=0;j<3;j++){
                boardState += board[i][j].getValue() + ' '
            }
            console.log(boardState)
        }
    }
    // attempt at declaring winner
    // need a reset or stop arithmetic > DONE using return
    // > Proceed with checks for win, ties 
    //  and prevent calling gameplay functions by returning 
    let isWon = ``
    const getIsWon = ()=>{
        return isWon
    }

    const setWinner = (row, col, player) => {
        // wrapping each win possib with module pattern/IIFE
        // each time setWinner is called, all win possibs are fired
        const winRow = (() => {
            const value = player.value
            if(board[row][0].getValue() === value 
            && board[row][1].getValue() === value 
            && board[row][2].getValue() === value){
                
                isWon = `Won at row ${row}`
            }
        })()
        const winCol = (() => {
            const value = player.value
            if(board[0][col].getValue() === value 
            && board[1][col].getValue() === value 
            && board[2][col].getValue() === value){
                
                isWon = `Won at column ${col}`
            }
        })()
        const winDiagonal = (() => {
            const value = player.value
            if(board[0][0].getValue() === value 
            && board[1][1].getValue() === value 
            && board[2][2].getValue() === value){

                isWon = `Won at diagonal downwards left to right`
            } 
            else if(board[0][2].getValue() === value 
            && board[1][1].getValue() === value 
            && board[2][0].getValue() === value){

                isWon = `Won at diagonal upwards left to right`
            }
        })()
        if(isWon !== ''){
            console.log(isWon)
        }
    }

    return{isCellAvailable,placeTag, printBoard, setWinner, getIsWon}
}




const playRound = (first = `Player One`, second = `Player Two`) =>{
    const players = [
        playerOne = {
            name:first,
            value:1
        },
        playerTwo = {
            name: second,
            value:2
        }
    ]

    let turn = 0
    let gameover = false

    board = Gameboard()
    //  setting initial player
    let activePlayer = players[0] 
    const switchPlayer = ()=>{
        activePlayer===players[0]?
        activePlayer=players[1]:
        activePlayer=players[0];
    }
    // upon click
    const playedCell = (row,col,player) => {
        // syntax was googled
        const cell = document.querySelector(`[data-row-id="${row}"][data-col-id="${col}"]`)
        console.log(cell)
        if(player.value === 1){
            cell.textContent = `O`
        } else{
            cell.textContent = `X`
        }
    }
    
    const play = (row,col)=>{
        // if 9th turn is passed , its a tie
        // placing turn increment before check allows 9 turn to go through
        turn += 1
        if(turn === 10 ){
            alert(`It's a tie`)
            // when play is called again it becomes 10, forever
            turn = 9
            return
        }
        // i had to create a getIsWon function for it to work
        // returning isWon itself did not work
        if(board.getIsWon() !== ''){
            return
        }
        // adding a boolean to check if board cell is valid
        if(!(board.isCellAvailable(row,col))){
            console.log(`busy cell`)
            // remove one turn to adjust
            turn -= 1
            return
        }

        board.placeTag(row,col,activePlayer.value)
        playedCell(row,col,activePlayer)
        board.setWinner(row,col,activePlayer)
        
        switchPlayer()
        board.printBoard()
        
    }
    return{play}
}

// THOSE ARE GLOBAL SCOPED
const play = playRound()
const populateBoard = () => {
    const container = document.querySelector(`.container`)
    const cell = (row,col) => {
        let nestedCell = document.createElement('div')
        nestedCell.setAttribute(`class`,`cell`)
        nestedCell.setAttribute(`data-row-id`,row)
        nestedCell.setAttribute(`data-col-id`,col)
        return nestedCell
    }
    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            container.appendChild(cell(i,j))
        }
    }
}

const removeCells = ()=>{
    const cells = document.querySelectorAll(`.cell`)
    cells.forEach((cell, index)=>{
        cell.remove()
    })
}

const startBtn = document.querySelector(`#Start`)
const restartBtn = document.querySelector(`#Restart`)
startBtn.addEventListener('click',(event) =>{
    startBtn.style.visibility = `hidden`
    restartBtn.style.visibility = `visible`

    populateBoard()
    restartBtn.addEventListener(`click`, (event)=>{
        startBtn.style.visibility = `visible`
        restartBtn.style.visibility = `hidden`
        removeCells()
    })
})

// remembered a click parent and using event.target.closet in the library project
// since cells are created after page load, event listener to cells will no capture
const container = document.querySelector(`.container`)
container.addEventListener(`click`,(event) =>{
    const cell = event.target.closest(`.cell`)
    row = cell.dataset.rowId
    col = cell.dataset.colId

    play.play(row,col)
})

// function displayController(){
//     // Populate cells with according row and col Ids
//     const populateBoard = () => {
//         const container = document.querySelector(`.container`)
//         const cell = (row,col) => {
//             let nestedCell = document.createElement('div')
//             nestedCell.setAttribute(`class`,`cell`)
//             // hyphen in html are converted to camel case when accessing in javascript
//             // e.g setAttribute(data-row-id) === accessing (dataset.rowId)
//             // additionally caps are converted to lower case from JS to HTML
//             // setAttribute(`data-rowId`) === accessing (dataset.rowid)
//             nestedCell.setAttribute(`data-row-id`,row)
//             nestedCell.setAttribute(`data-col-id`,col)
//             return nestedCell
//         }
//         for(let i = 0;i<3;i++){
//             for(let j = 0;j<3;j++){
//                 container.appendChild(cell(i,j))
//             }
//         }
//     }

//     const removeCells = ()=>{
//         const cells = document.querySelectorAll(`.cell`)
//         cells.forEach((cell, index)=>{
//     // Initialising
//     const startBtn = document.querySelector(`#Start`)
//     const restartBtn = document.querySelector(`#Restart`)

//     const control = Controller()
    

// // ------ Event Listeners ------ //

// startBtn.addEventListener('click',(event) =>{
//     startBtn.style.visibility = `hidden`
//     restartBtn.style.visibility = `visible`

//     const round = control.playRound()
//     const display = displayController()

//     display.populateBoard()
//     const container = document.querySelector(`.container`)
//     container.addEventListener(`click`,(event) =>{
//         const cell = event.target.closest(`.cell`)
//         if(!cell){return}
//         round.play(display.getRow(),display.getCol())
//     })

//     restartBtn.addEventListener(`click`, (event)=>{
//             startBtn.style.visibility = `visible`
//             restartBtn.style.visibility = `hidden`
//             display.removeCells()
//         })
//     })
// }          cell.remove()
//         })
//     }

 
//     let row;
//     let col;
//     const getRow = ()=>{
//         return row
//     }
//     const getCol = ()=>{
//         return col
//     }

//     
//    
//     return{populateBoard,removeCells,getRow,getCol}
// }
// function playGame(){
//     // Initialising
//     const startBtn = document.querySelector(`#Start`)
//     const restartBtn = document.querySelector(`#Restart`)

//     const control = Controller()
    

// // ------ Event Listeners ------ //

// startBtn.addEventListener('click',(event) =>{
//     startBtn.style.visibility = `hidden`
//     restartBtn.style.visibility = `visible`

//     const round = control.playRound()
//     const display = displayController()

//     display.populateBoard()
//     const container = document.querySelector(`.container`)
//     container.addEventListener(`click`,(event) =>{
//         const cell = event.target.closest(`.cell`)
//         if(!cell){return}
//         round.play(display.getRow(),display.getCol())
//     })

//     restartBtn.addEventListener(`click`, (event)=>{
//             startBtn.style.visibility = `visible`
//             restartBtn.style.visibility = `hidden`
//             display.removeCells()
//         })
//     })
// }







