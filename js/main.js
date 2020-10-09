console.log('connected');

// DOM objects
const boardDiv = document.querySelector('#board');
const gameLog = document.querySelector('#gamelog');

//TicTacToe Objects
let board;
const player1 = new Player('player1','X');
const player2 = new Player('player2','O');
let curPlayer = player1;
let gameActive = true;

const maxMoves = 9;
let curMoves = 0;
/**
 * playerTurn
 * @param {*} targetDiv 
 * Takes a div Element as an argument.
 * If the game is currently active and the player made a legal move,
 * this function will process that move.
 */
const playerTurn = (targetDiv) =>{
    if(targetDiv.value === '' && gameActive){
        curMoves ++;
        targetDiv.value = curPlayer.value;
        targetDiv.classList.add(curPlayer.value);
        console.log(curMoves);
        if(curMoves === maxMoves){
            gameLog.value += '\nGame is a draw!';
            gameActive = false;
        }
        if(board.findWinner()===curPlayer.value){
            gameActive = false;
            gameLog.value += `\n${curPlayer.name} wins!`;
            curPlayer.score ++;
        }
        if (curPlayer === player1 && gameActive){
            gameLog.value += `\n${player2.name}'s turn`;
            curPlayer = player2;
        }
        else if(curPlayer === player2 && gameActive){
            gameLog.value += `\n${player1.name}'s turn`;
            curPlayer = player1;
        }
        
    }
}

const onClickTileDivHandler = (event) =>{

    if(event.target.className === 'tile'){
        playerTurn(event.target);
    }
    
}

// Create 3x3 board of tiles
const createBoard = ()=>{
    // make 2D array of tiles
    const tiles = [[],[],[]];
    for(let i=0;i<3;i++){

        // create Div of class row, append to board div
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class','row');

        boardDiv.append(rowDiv);
        for(let j=0;j<3;j++){
            
            // create Div, append to row, and add to tile array
            const tileDiv = document.createElement('div');
            tileDiv.setAttribute('class','tile');
            rowDiv.append(tileDiv);
            const tile = new Tile(tileDiv);
            tiles[i][j] = tile;
        }
    }

    // create new Board instance with tiles
    return new Board(tiles);
};
boardDiv.addEventListener('click',onClickTileDivHandler);
board = createBoard();
board.reset();