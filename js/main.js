console.log('connected');

// DOM objects
const boardDiv = document.querySelector('#board');
const gameLog = document.querySelector('#gamelog');
const gameStartButton = document.querySelector('#startGame');
const scores = document.querySelectorAll('.score');

//TicTacToe Objects
let ticTacToe;
let board;
const player1 = new Player('player1','X');
const player2 = new Player('player2','O');

const onClickTileDivHandler = (event) =>{

    // if space clicked was a tile, attempt a tictactoe move
    if(event.target.className === 'tile'){
        ticTacToe.playerTurn(event.target,ticTacToe.curPlayer.value);
        //update player scores and tie
        scores[0].innerText = ticTacToe.player1.score;
        scores[1].innerText = ticTacToe.tie;
        scores[2].innerText = ticTacToe.player2.score;
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

const startGame = (event)=>{
    event.preventDefault();
    ticTacToe.isReplay = false;
    ticTacToe.startGame();
}

const init = () =>{
    
    board = createBoard();
    ticTacToe = new TicTacToe(player1,player2,board,gameLog);
    boardDiv.addEventListener('click',onClickTileDivHandler);
    gameStartButton.addEventListener('click',startGame);
    
}

init();

console.log(scores);
