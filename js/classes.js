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
    // used for debugging
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

                div.classList.remove('X_Win');
                div.classList.remove('O_Win');
            });
        });
    };

    // Return the value of the tiles that are lined up 3 in a row
    findWinner = () =>{
        
        const board = this.tiles;
        let winClass;
        // Check Rows
        for(let i=0;i<3;i++){
            
            if(board[i][0].tileDiv.value===board[i][1].tileDiv.value && board[i][1].tileDiv.value=== board[i][2].tileDiv.value){
                if(board[i][0].tileDiv.value!== ''){
                    winClass = board[i][0].tileDiv.value+'_Win';
                    board[i][0].tileDiv.classList.add(winClass);
                    board[i][1].tileDiv.classList.add(winClass);
                    board[i][2].tileDiv.classList.add(winClass);
                }
                
                return board[i][0].tileDiv.value;
            }
        }
        
        // Check Column
        for(let i=0;i<3;i++){
            if(board[0][i].tileDiv.value===board[1][i].tileDiv.value && board[1][i].tileDiv.value === board[2][i].tileDiv.value){
                if(board[0][i].tileDiv.value!==''){
                    winClass = board[0][i].tileDiv.value+'_Win';
                    board[0][i].tileDiv.classList.add(winClass);
                    board[1][i].tileDiv.classList.add(winClass);
                    board[2][i].tileDiv.classList.add(winClass);
                }
                
                return board[0][i].tileDiv.value;
            }
        }
        
        // Check top left corner to bottom right corner
        if(board[0][0].tileDiv.value=== board[1][1].tileDiv.value && board[1][1].tileDiv.value ===board[2][2].tileDiv.value){
            if(board[1][1].tileDiv.value!==''){
                winClass = board[1][1].tileDiv.value+'_Win';
            
                board[0][0].tileDiv.classList.add(winClass);
                board[1][1].tileDiv.classList.add(winClass);
                board[2][2].tileDiv.classList.add(winClass);
            }
            
            return board[0][0].tileDiv.value;
        } 
        
        // check bottom left corner to top right corner
        if(board[0][2].tileDiv.value=== board[1][1].tileDiv.value&& board[1][1].tileDiv.value ===board[2][0].tileDiv.value){
            
            if(board[1][1].tileDiv.value!==''){
                winClass = board[1][1].tileDiv.value+'_Win';
            
                board[0][0].tileDiv.classList.add(winClass);
                board[1][1].tileDiv.classList.add(winClass);
                board[2][2].tileDiv.classList.add(winClass);
            }

            return board[0][2].tileDiv.value;
        } 

        return 'no Winner :(';
    };

    getCenter = ()=>{
        if(this.tiles[1][1].tileDiv.value === '') return this.tiles[1][1].tileDiv;
    }
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
    constructor(board,gameLog){
        this.player1 = new Player('player1','X');
        this.player2 = new Player('player2','O');
        this.firstPlayer = this.player1;
        this.curPlayer = this.player1;
        this.tie = 0;
        this.board = board;
        this.gameActive = false;
        this.moves = []; // array of moves to be played in order
        this.curMoves = 0;
        this.gameLog = gameLog;
        this.isReplay = false;
    };

    /**
     * Given a cell index, return that cell if it is empty, and its rowmates are not empty and have the same value
     * @param {*} i 
     * @param {*} columnIndex 
     */
    findWinningMoveInRow(i,columnIndex){
        let col1;
        let col2;
        const myBoard = this.board.tiles;
        const curPlayerVal = this.curPlayer.value;

        let winningTile;

        // set up other columns
        if(columnIndex === 0){
            col1 = 1;
            col2 = 2;
        }
        else if (columnIndex === 1){
            col1 = 0;
            col2 = 2;
        }
        else if(columnIndex === 2){
            col1 = 0;
            col2 = 1;
        }
        console.log('check column: '+columnIndex);
        console.log('other column:' +col1);
        console.log('other column:' +col2);


        if(myBoard[i][columnIndex].tileDiv.value === ''){
            console.log('myBOard'+i+columnIndex+'is null');

            console.log('col1: '+myBoard[i][col1].tileDiv.value);
            console.log('col2: '+myBoard[i][col2].tileDiv.value );
            if(myBoard[i][col1].tileDiv.value === myBoard[i][col2].tileDiv.value 
                && myBoard[i][col1].tileDiv.value !== ''){
                    // // write tile if null
                    // if(winningTile === undefined){
                    //     winningTile = myBoard[i][0].tileDiv;
                    //     console.log('winng tile is null');
                    //     console.log(winningTile);
                    // }
                    
                    // // Overwrite tile if winning move is for current player
                    // if(curPlayerVal === myBoard[i][1].tileDiv.value){
                    //     console.log(curPlayerVal);
                    //     console.log(myBoard[i][1]);
                    //     winningTile = myBoard[i][0].tileDiv;
                    //     console.log(' winning tile matches curplayer');
                    //     console.log(winningTile);
                    // }
                    winningTile = myBoard[i][columnIndex].tileDiv;
                    console.log(winningTile);
            }
            return winningTile;
        }
    }

    /**
     * 
     * If two tiles in a row, column or diagonal have the same value and one is empty,
     * return the empty tile
     * 
     * This will handle win and block for tic tac toe strategy
     */
    findWinningMove =()=>{
        const myBoard = this.board.tiles;
        const curPlayerVal = this.curPlayer.value;

        let winningTile;
        

        //Check rows
        for(let i=0;i<3;i++){
            console.log('in row loop:'+i);
            let tmpTile;
            
            tmpTile = this.findWinningMoveInRow(i,0);

            if(tmpTile === undefined){
                tmpTile = this.findWinningMoveInRow(i,1);
                if(tmpTile === undefined){
                    tmpTile = this.findWinningMoveInRow(i,2);
                }
            }
            
            console.log('Tmp Tile: '+tmpTile);
            if(tmpTile!==undefined){
                // if winning tile is null, populate it
                if(winningTile === undefined){
                    winningTile = tmpTile;

                    console.log('win tile is null. new val: '+winningTile);
                }
                // if current player value is not equal to current winner, over write
                else if(curPlayerVal !== winningTile.value){
                    winningTile = tmpTile;
                }
            }
            
        }
        //Check columns

        //Check diagonal 1

        //Check diagonal 2

        console.log('return: '+winningTile);
       return winningTile;
        
    }
    /*
        Strategy from Wikipedia (https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy):
        Win: If the player has two in a row, they can place a third to get three in a row.
        Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.
        
        Fork: Create an opportunity where the player has two ways to win (two non-blocked lines of 2).
        Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it. 
        Otherwise, the player should block all forks in any way that simultaneously allows them to create two in a row. 
        Otherwise, the player should create a two in a row to force the opponent into defending, as long as it doesn't result in them creating a fork. 
        For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner move in order to win. (Playing a corner move in this scenario creates a fork for "X" to win.)
        
        Center: A player marks the center. (If it is the first move of the game, playing a corner move gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)
        Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
        Empty corner: The player plays in a corner square.
        Empty side: The player plays in a middle square on any of the 4 sides.
    */
    suggestMove = () =>{

    }

    /**
     * swap the X and O values of players
     */
    swapPieces = () =>{
        const tmp = this.player1.value;
        this.player1.value = this.player2.value;
        this.player2.value = tmp;
    }

    // Swap current player
    swapCurrentPlayer = () =>{
        if (this.curPlayer === this.player1) this.curPlayer = this.player2;
        else this.curPlayer = this.player1;
    }
    /**
     * 
     * Sets inital game state
     */
    startGame = () =>{
        this.board.reset();
        this.gameActive = true;
        this.curPlayer = this.firstPlayer;
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
            setTimeout(() => { this.playerTurn(move.tile);}, (index+1)*2000);
        })
    }
    /**
     * 
     * @param {*} targetDiv 
     */
    playerTurn = (targetDiv) =>{
        let scoreInc = 0;
        if(targetDiv.value === '' && this.gameActive){
            this.curMoves ++;
            targetDiv.value = this.curPlayer.value;
            targetDiv.classList.add(this.curPlayer.value);
            
            if(this.isReplay === false){
                this.moves.push(new Move(targetDiv,this.curPlayer.value));
                scoreInc = 1; // only increment score if game is not a replay
            }
            if(this.board.findWinner()===this.curPlayer.value){
                this.gameActive = false;
                this.gameLog.value += `\n${this.curPlayer.name} wins!`;
                this.curPlayer.score += scoreInc;
            }
            if(this.curMoves === 9 && this.gameActive){
                this.gameLog.value += '\nGame is a draw!';
                this.gameActive = false;
                this.tie += scoreInc;
            }
            if (this.gameActive){
                this.swapCurrentPlayer();
                this.gameLog.value += `\n${this.curPlayer.name}'s turn`;
            }
        }
    }
};