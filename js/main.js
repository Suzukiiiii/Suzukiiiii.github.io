console.log('connected');
const boardDiv = document.querySelector('#board');
let tiles = [[],[],[]];

const createBoard = ()=>{
    for(let i=0;i<3;i++){

        // create Div of class row, append to board div
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class','row');

        boardDiv.append(rowDiv);
        for(let j=0;j<3;j++){
            
            // create Div, append to row, add Event Listener
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

const board = createBoard();
//  tileDiv = document.querySelector('.tile');

//  console.log(tileDiv);

//  tile1 = new Tile(tileDiv);


//  //tile1.tileDiv = tileDiv
//  console.log(tile1);
//  console.log(tile1.tileDiv);