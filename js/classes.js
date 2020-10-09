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
             if(tile.tileDiv===tileDivIn)
                 tileToReturn = tile;
            })
        });
        return tileToReturn;
    };
    
    reset(){
        // go into each tileDiv, reset the value and change to default CSS
        this.tiles.forEach((row)=>{
            row.forEach((tile)=>{
                const div = tile.tileDiv;
                div.value = '';
                div.classList.remove('X');
                div.classList.remove('O');
            });
        });
    };

    // Return the value of the tiles that are lined up 3 in a row
    findWinner = () =>{
        
        const board = this.tiles;

        // Check Rows
        for(let i=0;i<3;i++){
            
            if(board[i][0].tileDiv.value===board[i][1].tileDiv.value && board[i][1].tileDiv.value=== board[i][2].tileDiv.value){
                return board[i][0].tileDiv.value;
            }
        }
        
        // Check Column
        for(let i=0;i<3;i++){
            if(board[0][i].tileDiv.value===board[1][i].tileDiv.value && board[1][i].tileDiv.value === board[2][i].tileDiv.value){
                return board[0][i].tileDiv.value;
            }
        }
        
        // Check top left corner to bottom right corner
        if(board[0][0].tileDiv.value=== board[1][1].tileDiv.value && board[1][1].tileDiv.value ===board[2][2].tileDiv.value) return board[0][0].tileDiv.value;
        
        // check bottom left corner to top right corner
        if(board[0][2].tileDiv.value=== board[1][1].tileDiv.value&& board[1][1].tileDiv.value ===board[2][0].tileDiv.value) return board[0][2].tileDiv.value;

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