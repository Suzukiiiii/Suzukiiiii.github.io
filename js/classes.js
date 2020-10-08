class Tile{
    
    constructor(tileDiv){
        this.tileDiv = tileDiv;
    };
};

// A board is a 2D array of 3x3 tiles.
class Board{
    constructor(tiles){
        this.tiles = tiles;
    }

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
    }

    // Return the value of the tiles that are lined up 3 in a row
    findWinner = () =>{

    };
};

class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.value = '-';
    }
    
}