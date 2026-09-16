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
    return{isCellAvailable,placeTag, printBoard}
}



function Controller(first = `playerOne`, second = `playerTwo`){
    // Creating Players
    // initially players as obj, switch to array of objects -> was obvious
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
    
    const playRound = () =>{
        
        board = Gameboard()
        //  setting initial player
        let activePlayer = players[0] 
        const switchPlayer = ()=>{
            activePlayer===players[0]?
            activePlayer=players[1]:
            activePlayer=players[0];
        }
        
        const play = (row,col)=>{
            // adding a boolean to check if board cell is valid
            if(!(board.isCellAvailable(row,col))){
                console.log(`busy cell`)
                return
            }
            board.placeTag(row,col,activePlayer.value)
            switchPlayer()
            board.printBoard()
        }
        return{play}
    }
    return{playRound}
}



