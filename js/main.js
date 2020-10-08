console.log('connected');
const boardDiv = document.querySelector('#board');
let tiles = [[],[],[]];
let board;

const onClickTileDivHandler = (event) =>{
    console.log(event);
    console.log(board.findTileByTileDiv(event.target));
}

// Create 3x3 board of tiles
const createBoard = ()=>{
    for(let i=0;i<3;i++){

        // create Div of class row, append to board div
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class','row');

        boardDiv.append(rowDiv);
        for(let j=0;j<3;j++){
            
            // create Div, append to row, (potentially)add Event Listener
            const tileDiv = document.createElement('div');
            tileDiv.setAttribute('class','tile');
            //tileDiv.addEventListener('click',onClickTileDivHandler);
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