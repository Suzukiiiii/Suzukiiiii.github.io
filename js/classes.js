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

class Move{
    constructor(tile,value){
        this.tile = tile;
        this.value = value;
    }
}

// An object to represent the Tic Tac Toe game
class TicTacToe{
    constructor(player1,player2,board,gameLog){
        this.player1 = player1;
        this.player2 = player2;
        this.curPlayer = player1;
        this.tie = 0;
        this.board = board;
        this.gameActive = false;
        this.moves = []; // array of moves to be played in order
        this.curMoves = 0;
        this.gameLog = gameLog;
        this.isReplay = false;
    };

    /**
     * swap the X and O values of players
     */
    swapPieces = () =>{
        const tmp = this.player1.value;
        this.player1.value = this.player2.value;
        this.player2.value = tmp;
    }

    /**
     * 
     * Sets inital game state
     */
    startGame = () =>{
        this.board.reset();
        this.gameActive = true;
        this.curPlayer = player1;
        this.curMoves = 0;
        this.gameLog.value = `${this.curPlayer.name}'s turn`
        if(this.isReplay === false){
            this.moves = [];
        };
    }
    
    /**
     * Plays back each move of the last played game, with 2 second delay betwen each move
     */
    replayGame = () =>{
        this.isReplay = true;
        this.startGame();
        this.moves.forEach((move,index)=>{
            console.log(move);
            console.log(index);
            setTimeout(() => { this.playerTurn(move.tile,move.value);}, (index+1)*2000);
        })
    }
    /**
     * 
     * @param {*} targetDiv 
     * @param {*} value 
     */
    playerTurn = (targetDiv,value) =>{

        if(targetDiv.value === '' && this.gameActive){
            this.curMoves ++;
            targetDiv.value = value;
            targetDiv.classList.add(value);
            
            if(this.isReplay === false){
                this.moves.push(new Move(targetDiv,value));
            }
            if(this.board.findWinner()===value){
                this.gameActive = false;
                this.gameLog.value += `\n${this.curPlayer.name} wins!`;
                this.curPlayer.score ++;
            }
            if(this.curMoves === 9 && this.gameActive){
                this.gameLog.value += '\nGame is a draw!';
                this.gameActive = false;
                this.tie ++;
            }
            if (this.curPlayer === this.player1 && this.gameActive){
                this.gameLog.value += `\n${this.player2.name}'s turn`;
                this.curPlayer = this.player2;
            }
            else if(this.curPlayer === this.player2 && this.gameActive){
                this.gameLog.value += `\n${this.player1.name}'s turn`;
                this.curPlayer = this.player1;
            } 
        }
    }

    /**
     * findwinner?
     */
};