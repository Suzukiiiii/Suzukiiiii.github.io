console.log('connected');

const boardDiv = document.querySelector('#board');
const gameLog = document.querySelector('#gamelog');

let board;

const player1 = new Player('player1','X');
const player2 = new Player('player2','O');
let curPlayer = player1;
let gameActive = false;
const playerTurn = (targetDiv) =>{
    if(targetDiv.value === '' && gameActive){
        targetDiv.value = curPlayer.value;
        targetDiv.classList.add(curPlayer.value);

        if (curPlayer === player1 && gameActive){

            curPlayer = player2;
        }
        else if(curPlayer === player2 && gameActive){
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