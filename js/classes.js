class Tile{
    
    constructor(tileDiv){
        this.tileDiv = tileDiv;
    };
};

// A board is a 2D array of 3x3 tiles.
class Board{
    constructor(tiles){
        this.tiles = tiles;
    };

    // go through each tile in board and return the tile object if their Div matches input Div
    findTileByTileDiv(tileDivIn){
        let tileToReturn;
        this.tiles.forEach((row)=>{
            row.forEach((tile)=>{
             console.log(tile.tileDiv);
             console.log(tileDivIn);
            
             if(tile.tileDiv===tileDivIn)
                 tileToReturn = tile;
            })
        });
        return tileToReturn;
    };
    
    reset(){
        this.tiles
    };

    // Return the value of the tiles that are lined up 3 in a row
    findWinner = () =>{
        // Check Rows
        const board = this.tiles;
        for(let i=0;i<3;i++){
            
            if(board[i][0].value===board[i][1].value && board[i][1].value=== board[i][2].value){
                return board[i][0].tileDiv.value;
            }
        }
        
        // Check Column
        for(let i=0;i<3;i++){
            if(board[0][i].value===board[1][i].value && board[1][i].value === board[2][i].value){
                console.log('here');
                return board[i][0].tileDiv.value;
            }
        }
        
        // Check top left corner to bottom right corner
        if(board[0][0].value=== board[1][1].value && board[1][1].value ===board[2][2].value) return board[0][0].tileDiv.value;
        
        // check bottom left corner to top right corner
        if(board[0][2].value=== board[1][1].value&& board[1][1].value ===board[2][0].value) return board[0][2].tileDiv.value;

        return 'no Winner :(';
    };
};

// A player represents the user playing the game.
// They have a name, number of wins, and the value of their piece (X or O)
class Player{
    constructor(name,value){
        this.name = name;
        this.score = 0;
        this.value = value;
    };
    
};

class TicTacToe{
    constructor(player1,player2,board){
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.gameActive = false;
    };


};