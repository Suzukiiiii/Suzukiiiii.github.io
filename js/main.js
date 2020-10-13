// DOM objects
const boardDiv = document.querySelector('#board');
const gameLog = document.querySelector('#gamelog');
const gameStartButton = document.querySelector('#startGame');
const replayGameButton = document.querySelector('#replayGame');
const scores = document.querySelectorAll('.score');
const firstPlayerRadio = document.getElementsByName('first');

//TicTacToe Objects
let ticTacToe;
let board;

const onClickTileDivHandler = (event) =>{
    // if space clicked was a tile, attempt a tictactoe move
    if(event.target.className === 'tile'){
        ticTacToe.playerTurn(event.target,ticTacToe.curPlayer.value);
        //update player scores and tie
        scores[0].innerText = ticTacToe.player1.score;
        scores[1].innerText = ticTacToe.tie;
        scores[2].innerText = ticTacToe.player2.score;
    } 

    if (ticTacToe.gameActive === false){
        replayGameButton.disabled = false;
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

            // set CSS classes
            tileDiv.setAttribute('class','tile');
            if(i===0) tileDiv.classList.add('top');
            if(i===2) tileDiv.classList.add('bottom');
            if(j===0) tileDiv.classList.add('left');
            if(j===2) tileDiv.classList.add('right');

            rowDiv.append(tileDiv);
            const tile = new Tile(tileDiv);
            tiles[i][j] = tile;
        }
    }

    // create new Board instance with tiles
    return new Board(tiles);
};

const getFirstPlayerFromRadioButton = () =>{
    let returnVal;
    for(let i=0;i<firstPlayerRadio.length;i ++){
        if(firstPlayerRadio[i].checked){
            returnVal = firstPlayerRadio[i].value;
        }
    }

    return returnVal;
}

const startButtonClicked = (event)=>{
    event.preventDefault();
    
    replayGameButton.disabled = true;
    if(getFirstPlayerFromRadioButton() === 'player1'){
        ticTacToe.firstPlayer = ticTacToe.player1;
    }
    else{
        ticTacToe.firstPlayer = ticTacToe.player2;
    }
    boardDiv.addEventListener('click',onClickTileDivHandler);
    ticTacToe.isReplay = false;
    ticTacToe.startGame();
}

const replayGame = (event)=>{
    event.preventDefault();
    boardDiv.removeEventListener('click',onClickTileDivHandler);
    ticTacToe.replayGame();
}

const init = () =>{
    
    board = createBoard();
    ticTacToe = new TicTacToe(board,gameLog);
    gameStartButton.addEventListener('click',startButtonClicked);
    replayGameButton.addEventListener('click',replayGame);
    
}

init();
