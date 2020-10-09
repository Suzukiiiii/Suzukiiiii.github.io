console.log('connected');
const boardDiv = document.querySelector('#board');

let board;

const player1 = new Player('player1','X');
const player2 = new Player('player2','O');
let curPlayer = player1;

const playerTurn = (targetDiv) =>{
    if(targetDiv.value === ''){
        targetDiv.value = curPlayer.value;
        targetDiv.classList.add(curPlayer.value);

        if (curPlayer === player1){
            curPlayer = player2;
        }
        else curPlayer = player1;
    }
}

const onClickTileDivHandler = (event) =>{
    //console.log(event);

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
            
            // create Div, append to row, (potentially)add Event Listener
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